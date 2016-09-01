module.exports = function(config) {
  const cfg = {

    basePath: '.',

    frameworks: ['jasmine', 'source-map-support'],

    files: ['./karma.entry.js'],

    reporters: ['mocha', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        {
          type: 'text-summary',
          subdir: '.',
          file: 'summary.txt'
        },
        {
          type: 'json',
          subdir: '.',
          file: 'coverage.json'
        }
      ]
    },

    preprocessors: {
      'karma.entry.js': ['webpack']
    },

    webpack: require('./webpack.config'),

    webpackServer: {
      noInfo: true
    },

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [
      'Chrome'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  };

  if (process.env.TRAVIS) {
    cfg.browsers = ['Chrome_travis_ci'];
  }

  config.set(cfg);
};
