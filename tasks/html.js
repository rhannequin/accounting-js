var gulp     = require('gulp')
  , jade     = require('gulp-jade')
  , plumber  = require('gulp-plumber')
  , paths    = require('./paths')
  , utils    = require('../utils')
  , expenses = require('../' + paths.sources.root + 'data.json')

module.exports = function() {
  return gulp.src(paths.sources.root + 'index.jade')
    .pipe(plumber())
    .pipe(jade({ pretty: true, locals: { expenses: utils.convert(expenses) } }))
    .pipe(gulp.dest(paths.dist.root))
}
