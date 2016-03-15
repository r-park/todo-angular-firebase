const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base');


module.exports = {
  devtool: 'inline-source-map',
  resolve: config.resolve,
  postcss: config.postcss,

  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, include: [path.resolve(__dirname, 'src/components')], loader: 'raw!postcss-loader!sass'},
      {test: /\.scss$/, include: [path.resolve(__dirname, 'src/styles')], loader: 'style!css!postcss-loader!sass'},
      {test: /\.ts$/, exclude: [/node_modules/], loader: 'ts'}
    ],

    noParse: config.module.noParse
  }
};
