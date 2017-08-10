module.exports = {
	entry: './src/client/test.js',
	
	module: {
		loaders: [{
			loader: "babel-loader",
			
			// Options to configure babel with
			query: {
				presets: ['es2015'],
			}
		}]
	},
	
	output: {
		filename: 'test.js',
		path: __dirname+'/../test'
	}
};