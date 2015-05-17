var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server',
		'./src/index' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'src'),
		filename: 'bundle.js',
		publicPath: '/src/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: [ '', '.js', '.jsx' ]
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { optional: ['es7.classProperties'], stage: 0 } },
			{ test: /\.jsx$/, loaders: [ 'react-hot', 'babel' ], include: path.join(__dirname, 'src') },
			{ test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style!css', exclude: /node_modules/ }
		]
	}
}
