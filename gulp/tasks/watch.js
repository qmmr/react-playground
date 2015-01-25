'use strict'

var gulp = require('gulp')
var config = require('../config')

gulp.task('watch', [ 'browserify', 'browserSync' ], function(cb) {
	gulp.watch(config.markup.src, [ 'markup' ])
})
