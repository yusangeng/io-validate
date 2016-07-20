var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	//plugins : [commonsPlugin],

	entry : {
		'dist/param-check' : './expose.js',
		'test/tests.bundle' : './test/tests.js'
	},

	output : {
		filename : '[name].js'
	},

	module : {
		loaders : [{
				test : /expose.js$/,
				loader : 'expose-loader?check'
			}
		]
	}
};
