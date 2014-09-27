var gulp    = require('gulp')
  , rimraf  = require('gulp-rimraf')
  , plumber = require('gulp-plumber')
  , paths   = require('./paths')

module.exports = function() {
  return gulp.src([
        paths.dist.styles + '**/*'
      , paths.dist.scripts + '**/*'
    ], { read: false })
    .pipe(plumber())
    .pipe(rimraf())
}
