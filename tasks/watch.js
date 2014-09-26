var gulp   = require('gulp')
  , server = require('./server')
  , paths  = require('./paths')

module.exports = function(){
  gulp.watch([paths.sources.root + 'index.jade', paths.sources.templates + '**/*.jade'], ['html'])
  gulp.watch([paths.dist.root + '**/*']).on('change', server.livereload)
}
