'use strict'

var gulp = require('gulp')
var config = require('../config')
// var watchify = require('./watchify')

gulp.task('watch', [ 'watchify', 'browserSync' ], function() {
	gulp.watch(config.markup.src, [ 'markup' ])
})
