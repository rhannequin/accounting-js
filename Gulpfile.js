var gulp  = require('gulp')
  , tasks = './tasks/'


gulp.task('clean', require(tasks + 'clean'))

gulp.task('html', require(tasks + 'html'))

// Generated assets
gulp.task('lint', require(tasks + 'lint'))
gulp.task('styles', require(tasks + 'styles'))
gulp.task('scripts', ['lint'], require(tasks + 'scripts'))

gulp.task('dist', ['clean', 'html', 'styles', 'scripts'])

// Server and livereaload
gulp.task('server', require(tasks + 'server').start)
gulp.task('watch', require(tasks + 'watch'))

// Default
gulp.task('default', ['dist'], function() {
  gulp.start('server', 'watch')
})
