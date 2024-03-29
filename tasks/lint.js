var gulp    = require('gulp')
  , plumber = require('gulp-plumber')
  , jshint  = require('gulp-jshint')
  , paths   = require('./paths')

module.exports = function() {
  return gulp.src([
        paths.sources.script + '**/*.js'
      , paths.tasks + '**/*.js'
      , paths.works + '**/*.js'
    ])
    .pipe(plumber())
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
}
