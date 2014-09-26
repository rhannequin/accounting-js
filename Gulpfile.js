var gulp  = require('gulp')
  , tasks = './tasks/'


gulp.task('clean', require(tasks + 'clean'))

gulp.task('html', require(tasks + 'html'))

gulp.task('dist', ['html'])

// Default
gulp.task('default', ['dist'], function() {
})
