const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.base');

// plugins
const DefinePlugin = webpack.DefinePlugin;


module.exports = {
  devtool: 'inline-source-map',
  resolve: config.resolve,
  postcss: config.postcss,

  module: {
    loaders: [
      {test: /\.ts$/, exclude: [/node_modules/], loader: 'ts'},
      {test: /\.scss$/, include: [path.resolve(__dirname, 'src/views/common/styles')], loader: 'style!css!postcss-loader!sass'},
      {test: /\.scss$/, exclude: [path.resolve(__dirname, 'src/views/common/styles')], include: [path.resolve(__dirname, 'src/views')], loader: 'raw!postcss-loader!sass'},
      {test: /\.html$/, loader: 'raw'}
    ]
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ]
};
