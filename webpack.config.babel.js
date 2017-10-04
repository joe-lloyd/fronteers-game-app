import path from 'path';

let clientConfig = {
	entry: {
		app: './index.js'
	},
	output: {
		path: path.resolve(__dirname, `./dist`),
		filename: '[name].js',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'
			}
		],
	},
	devtool: 'source-map',
};


module.exports = [clientConfig];
