'use strict'

var browserify = require('browserify')
var config = require('../config')
var gulp = require('gulp')
var gutil = require('gulp-util')
var handleErrors = require('../utils/handleErrors')
var bundleLogger = require('../utils/bundleLogger')
var to5ify = require('6to5ify')
var source = require('vinyl-source-stream')

gulp.task('browserify', function (cb) {
	var queueLength = config.browserify.bundleConfigs.length
	var createBundle

	createBundle = function(options) {
		var bundler, bundle, reportFinished

		bundler = browserify({
			cache: {},
			packageCache: {},
			fullPaths: true,
			// Specify the entry point of your app
			entries: options.entries,
			// Add file extentions to make optional in your requires
			extensions: options.extensions,
			// Enable source maps!
			debug: config.browserify.debug
		})

		bundle = function () {
			// Log when bundling starts
			bundleLogger.start(options.entries)

			return bundler
				.transform(to5ify)
				.bundle()
				// Report compile errors
				.on('error', handleErrors)
				// Use vinyl-source-stream to make the stream gulp compatible.
				// Specifiy the desired output filename here.
				.pipe(source(options.outputName))
				// Specify the output destination
				.pipe(gulp.dest(options.dest))
				.on('end', reportFinished)
		}

		reportFinished = function () {
			// Log when bundling completes
			bundleLogger.end(options.entries)

			if (queueLength) {
				queueLength -= 1
				if (queueLength == 0) {
					cb()
				}
			}
		}

		return bundle()
	}

	// create bundle for each bundleConfig
	config.browserify.bundleConfigs.forEach(createBundle)

})
