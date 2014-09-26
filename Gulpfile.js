var gulp  = require('gulp')
  , json  = require('./data.json')
  , utils = require ('./utils')
  , tasks = './tasks/'


gulp.task('clean', require(tasks + 'clean'))

gulp.task('html', require(tasks + 'html'))

gulp.task('dist', ['html'])

// Default
gulp.task('default', ['dist'], function() {
  console.log(utils.convert(json))
})
