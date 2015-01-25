var src = './src'
var dest = './dist'

module.exports = {

	browserSync: {
		server: {
			baseDir: [ '.', dest, src ]
		},
		port: 8000,
		files: [
			dest + '/**/*',
			'!' + dest + '/**/*.map'
		]
	},

	browserify: {
		debug: true,
		extensions: [ '.js', '.es6', '.jsx' ],
		bundleConfigs: [
			{
				entries: src + '/App.jsx',
				dest: dest,
				outputName: 'bundle.js'
			}
		]
	}

}
