// var webpack = require('webpack')
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var fs = require('fs')
var path = require('path')

var packageInfo = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf-8'))

var config = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../build'),
    filename: packageInfo.name + '.min.js',
    umdNamedDefine: true
  },

  devtool: 'cheap-module-source-map',

  module: {
    rules: []
  },

  plugins: [
    new UglifyJSPlugin({
      mangle: {
        // Skip mangling these
        except: ['$super', '$', 'exports', 'require']
      },
      sourceMap: true
    })
  ]
}

module.exports = config
