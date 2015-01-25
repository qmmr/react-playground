'use strict'

var gulp = require('gulp')
var del = require('del')
var config = require('../config')

gulp.task('clean', [ 'clean:markup', 'clean:css', 'clean:js' ])

gulp.task('clean:markup', function(cb) {
	del([ config.markup.dest + '/index.html' ], cb)
})

gulp.task('clean:css', function(cb) {
	del([ config.css.dest ], cb)
})

gulp.task('clean:js', function(cb) {
	del([ config.browserify.dest ], cb)
})
