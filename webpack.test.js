const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./src')
  },

  module: {
    loaders: [
      {test: /\.html$/, loader: 'raw'},
      {test: /\.scss$/, include: [path.resolve(__dirname, 'src/components')], loader: 'raw!postcss-loader!sass'},
      {test: /\.scss$/, include: [path.resolve(__dirname, 'src/styles')], loader: 'style!css!postcss-loader!sass'},
      {test: /\.ts$/, exclude: [/node_modules/], loader: 'ts'}
    ],

    noParse: [
      /angular2\/bundles\/.+/
    ]
  },

  postcss: [
    autoprefixer({ browsers: ['last 3 versions', 'Firefox ESR'] })
  ]
};
