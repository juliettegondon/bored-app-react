/* eslint-disable */
var path = require('path')
var merge = require('webpack-merge')
var common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CompressionPlugin()]
})
