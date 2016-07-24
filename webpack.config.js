var webpack = require('webpack');

module.exports = {
	entry : {
		'dist/param-check' : './index.js',
		'test/tests.bundle' : './test/tests.js'
	},

	output : {
		libraryTarget: 'umd',
		library: 'param-check',
		filename : '[name].js'
	},

	module : {
		loaders : []
	}
};
