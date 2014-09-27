var gulp   = require('gulp')
  , server = require('./server')
  , paths  = require('./paths')

module.exports = function(){
  gulp.watch([paths.sources.root + 'index.jade', paths.sources.templates + '**/*.jade'], ['html'])
  gulp.watch(paths.sources.styles + '**/*.scss', ['styles'])
  gulp.watch(paths.sources.scripts + '**/*.js', ['scripts'])
  gulp.watch([paths.dist.root + '**/*']).on('change', server.livereload)
}
