var gulp         = require('gulp')
  , plumber      = require('gulp-plumber')
  , sass         = require('gulp-ruby-sass')
  , autoprefixer = require('gulp-autoprefixer')
  , paths        = require('./paths')

module.exports = function() {
  var sassDir = paths.sources.styles
  return gulp.src(sassDir + 'main.scss')
    .pipe(plumber())
    .pipe(sass({ style: 'expanded', loadPath: [__dirname + '/../' + sassDir] }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(paths.dist.styles))
}

