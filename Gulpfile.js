var gulp  = require('gulp')
  , tasks = './tasks/'

gulp.task('clean', require(tasks + 'clean'))

gulp.task('html', require(tasks + 'html'))

// Generated assets
gulp.task('styles', require(tasks + 'styles'))
gulp.task('lint', require(tasks + 'lint'))
gulp.task('scripts', ['lint'], require(tasks + 'scripts'))
gulp.task('vendors', require(tasks + 'vendors'))

gulp.task('dist', ['clean', 'html', 'styles', 'scripts', 'vendors'])

// Server and livereaload
gulp.task('server', require(tasks + 'server').start)
gulp.task('watch', require(tasks + 'watch'))

// Default
gulp.task('default', ['dist'], function() {
  gulp.start('server', 'watch')
})
