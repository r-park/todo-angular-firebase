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
      {test: /\.scss$/, include: [path.resolve(__dirname, 'src/components')], loader: 'raw!autoprefixer-loader?{browsers:["last 3 versions", "Firefox ESR"]}!sass'},
      {test: /\.scss$/, include: [path.resolve(__dirname, 'src/styles')], loader: 'style!css!autoprefixer-loader?{browsers:["last 3 versions", "Firefox ESR"]}!sass'},
      {test: /\.ts$/, exclude: [/node_modules/], loader: 'ts'}
    ],

    noParse: [
      /zone\.js\/dist\/jasmine-patch\.js/,
      /zone\.js\/dist\/long-stack-trace-zone\.js/,
      /zone\.js\/dist\/zone-microtask\.js/
    ]
  }
};
