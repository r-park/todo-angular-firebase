const argv = require('yargs').argv;

module.exports = config => {
  const options = {
    frameworks: ['jasmine'],

    files: ['karma.entry.js'],

    preprocessors: {
      'karma.entry.js': ['webpack', 'sourcemap']
    },

    webpack: require('./webpack.config'),

    webpackServer: {
      noInfo: true
    },

    reporters: ['mocha'],

    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    browsers: ['Chrome']
  };

  if (argv.coverage) {
    options.reporters.push('coverage');

    options.coverageReporter = {
      dir: 'coverage',
      file: 'coverage.json',
      subdir: 'json',
      type: 'json'
    };
  }

  config.set(options);
};
