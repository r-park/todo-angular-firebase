const autoprefixer = require('autoprefixer');
const path = require('path');


module.exports = {
  entry: {
    main: './src/main',
    vendor: [
      'core-js/es6/array',
      'core-js/es6/map',
      'core-js/es6/set',
      'core-js/es6/string',
      'core-js/es6/symbol',
      'core-js/es7/reflect',
      'zone.js',
      'angular2/common',
      'angular2/core',
      'angular2/platform/browser',
      'angular2/router',
      'angularfire2',
      'firebase',
      'rxjs/add/operator/map'
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
    root: path.resolve('.')
  },

  postcss: [
    autoprefixer({ browsers: ['last 3 versions', 'Firefox ESR'] })
  ],

  sassLoader: {
    outputStyle: 'compressed',
    precision: 10,
    sourceComments: false
  }
};
