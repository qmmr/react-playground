var src = './src'
var dest = './dist'

module.exports = {

	browserify: {
		debug: true,
		extensions: [ '.js', '.es6', '.jsx' ],
		dest: dest + '/js',
		bundleConfigs: [
			{
				entries: src + '/App.jsx',
				dest: dest + '/js',
				outputName: 'bundle.js'
			}
		]
	},

	browserSync: {
		server: {
			baseDir: [ dest ]
		},
		port: 8000
		// files: [
		// 	dest + '/**/*',
		// 	'!' + dest + '/**/*.map'
		// ]
	},

	markup: {
		src: src + '/htdocs/**',
		dest: dest
	},

	css: {
		src: src + '/css/**',
		dest: dest + '/css'
	}

}
