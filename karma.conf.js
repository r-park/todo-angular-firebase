module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    /**
     * 1. zone-microtask must be included first as it contains a Promise monkey patch
     * 2. Including systemjs because it defines `__eval`, which produces correct stack traces.
     * 3. Sources and specs to be loaded via `karma.loader.js`
     */
    files: [
      'node_modules/zone.js/dist/zone-microtask.js', // [ 1 ]
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/es6-module-loader/dist/es6-module-loader.js',
      'node_modules/systemjs/dist/system.js', // [ 2 ]
      'node_modules/reflect-metadata/Reflect.js',
      {pattern: 'node_modules/@reactivex/rxjs/**', included: false, watched: false}, // [ 3 ]
      {pattern: 'node_modules/angular2/**', included: false, watched: false}, // [ 3 ]
      {pattern: 'target/**', included: false, watched: false}, // [ 3 ]
      'karma.loader.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // amount of time to wait for a message from browser before disconnecting
    // default is 10000ms (10 seconds)
    browserNoActivityTimeout: 300000, // 5 mins


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,


    // custom launcher for travis-ci
    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: process.env.TRAVIS ? ['TRAVIS_CHROME'] : ['Chrome']

  });
};
