var src = './src'
var dest = './dist'

module.exports = {

	browserify: {
		debug: true,
		extensions: [ '.js', '.es6', '.jsx' ],
		bundleConfigs: [
			{
				entries: src + '/Registration.jsx',
				dest: dest,
				outputName: 'bundle.js'
			}
		]
	},

	browserSync: {
		server: {
			baseDir: [ dest, src ]
		},
		port: 8000,
		files: [
			dest + '/**/*',
			'!' + dest + '/**/*.map'
		]
	},

	markup: {
		src: src,
		dest: dest
	}

}
