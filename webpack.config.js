const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: { index: './src/index.js', addTitleBar: './src/addTitleBar.js' },
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: { loader: 'babel-loader' },
				exclude: /node_modules/
			}
		]
	},
	target: 'electron-main',
	node: {
		__dirname: false
	},
	plugins: [new CopyPlugin([{ from: './assets', to: 'assets' }])]
};
