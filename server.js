var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var HOST = 'localhost'
var PORT = 8000

new WebpackDevServer(webpack(config), {
	contentBase: 'src',
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
}).listen(PORT, HOST, function (err, result) {
	if (err) {
		console.log(err);
	}

	console.log('WebpackDevServer is listening at localhost:' + PORT);
});
