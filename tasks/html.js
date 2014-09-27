var gulp          = require('gulp')
  , jade          = require('gulp-jade')
  , plumber       = require('gulp-plumber')
  , moment        = require('moment')
  , paths         = require('./paths')
  , utils         = require('../utils')
  , config        = require('../' + paths.sources.root + 'config.json')
  , expenses      = require('../' + paths.sources.root + 'data.json')
  , currentAmount = require('../' + paths.works + 'currentAmount')
  , jadeParams

moment.locale('fr')

expenses = utils.sortAndConvert(expenses)
jadeParams = {
    pretty: true
  , locals: {
      expenses: expenses
    , moment: moment
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
