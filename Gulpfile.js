var gulp  = require('gulp')
  , tasks = './tasks/'


gulp.task('clean', require(tasks + 'clean'))

gulp.task('html', require(tasks + 'html'))

gulp.task('dist', ['html'])

// Server and livereaload
gulp.task('server', require(tasks + 'server').start)
gulp.task('watch', require(tasks + 'watch'))

// Default
gulp.task('default', ['dist'], function() {
  gulp.start('server', 'watch')
})
