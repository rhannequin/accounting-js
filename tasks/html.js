var gulp          = require('gulp')
  , jade          = require('gulp-jade')
  , plumber       = require('gulp-plumber')
  , moment        = require('moment')
  , i18n          = require('i18n')
  , paths         = require('./paths')
  , utils         = require('../utils')
  , config        = require('../' + paths.sources.root + 'config.json')
  , expenses      = require('../' + paths.sources.root + 'data.json')
  , currentAmount = require('../' + paths.works + 'currentAmount')
  , toMonths      = require('../' + paths.works + 'toMonths')
  , jadeParams

moment.locale(config.locale)
i18n.configure({
    defaultLocale: config.locale
  , directory: paths.locales
  , objectNotation: true
})

expenses = utils.convert(expenses)
jadeParams = {
    pretty: true
  , locals: {
      expenses: toMonths(expenses)
    , moment: moment
    , i18n: i18n
    , currency: config.currency
    , currentAmount: currentAmount(expenses, config)
  }
}

module.exports = function() {
  return gulp.src(paths.sources.root + 'index.jade')
    .pipe(plumber())
    .pipe(jade(jadeParams))
    .pipe(gulp.dest(paths.dist.root))
}
