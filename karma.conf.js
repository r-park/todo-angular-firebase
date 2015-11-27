module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      // paths loaded directly by Karma
      {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/angular2.js', included: true, watched: true},
      {pattern: 'node_modules/angular2/bundles/testing.js', included: true, watched: true},
      {pattern: 'node_modules/immutable/dist/immutable.js', included: true, watched: true},
      {pattern: 'node_modules/mockfirebase/browser/mockfirebase.js', included: true, watched: true},
      {pattern: 'node_modules/sinon/pkg/sinon.js', included: true, watched: true},
      {pattern: 'karma.entry.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'target/**/*.js', included: false, watched: false},

      // paths loaded via Angular's component compiler
      // (these paths need to be rewritten, see `proxies` section below)
      {pattern: 'target/**/*.html', included: false, watched: true},
      {pattern: 'target/**/*.css', included: false, watched: true}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      '/components/': '/base/target/components/'
    },

    reporters: ['dots'],

    logLevel: config.LOG_INFO,

    // amount of time to wait for a message from browser before disconnecting
    // default is 10000ms (10 seconds)
    browserNoActivityTimeout: 300000, // 5 mins

    autoWatch: true,

    singleRun: false,

    // custom launcher for travis-ci
    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    browsers: process.env.TRAVIS ? ['TRAVIS_CHROME'] : ['Chrome']
  });
};
