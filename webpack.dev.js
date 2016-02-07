const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

// plugins
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const DefinePlugin = webpack.DefinePlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;


module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',

  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      './src/main'
    ],
    vendor: [
      'es6-shim',
      'angular2/bundles/angular2-polyfills',
      'angular2/common',
      'angular2/core',
      'angular2/platform/browser',
      'angular2/router',
      'firebase',
      'immutable',
      'rxjs'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  },

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
      {test: /\.ts$/, exclude: [/\.spec\.ts$/, /node_modules/], loader: 'ts'}
    ],

    noParse: [
      /angular2\/bundles\/.+/
    ]
  },

  postcss: [
    autoprefixer({ browsers: ['last 3 versions', 'Firefox ESR'] })
  ],

  sassLoader: {
    outputStyle: 'nested',
    precision: 10,
    sourceComments: false
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new OccurenceOrderPlugin(),
    new CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity}),
    new CommonsChunkPlugin({name: 'common', filename: 'common.js'}),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      filename: 'index.html',
      hash: true,
      inject: 'body',
      template: './src/index.html'
    })
  ],

  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
    port: 3000,
    publicPath: '/',
    stats: {
      cached: true,
      cachedAssets: true,
      chunks: true,
      chunkModules: false,
      colors: true,
      hash: false,
      reasons: true,
      timings: true,
      version: false
    }
  }
};
