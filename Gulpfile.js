var gulp = require('gulp')
  , json = require('./data.json')
  , utils = require ('./utils')

// Default
gulp.task('default', function() {
  console.log(utils.convert(json))
})
