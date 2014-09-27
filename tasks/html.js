var gulp     = require('gulp')
  , jade     = require('gulp-jade')
  , plumber  = require('gulp-plumber')
  , moment   = require('moment')
  , paths    = require('./paths')
  , utils    = require('../utils')
  , config   = require('../config.json')
  , expenses = require('../' + paths.sources.root + 'data.json')

moment.locale('fr')

var jadeParams = {
    pretty: true
  , locals: {
      expenses: utils.sortAndConvert(expenses)
    , moment: moment
    , currency: config.currency
  }
}

module.exports = function() {
  return gulp.src(paths.sources.root + 'index.jade')
    .pipe(plumber())
    .pipe(jade(jadeParams))
    .pipe(gulp.dest(paths.dist.root))
}
