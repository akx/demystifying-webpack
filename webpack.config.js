module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /.styl$/,
				use: ['style-loader', 'css-loader', 'stylus-loader'],
			},
			{
				test: /.(jpg|jpeg|png|mp3)$/,
				use: ['file-loader'],
			},
			{
				test: /.jsx?$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react'],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
};