/* eslint-disable */
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'eval',
  mode: 'development',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: [path.join(__dirname, 'public')],
    historyApiFallback: true, //Fallback to index.html
    disableHostCheck: true
  }
})
