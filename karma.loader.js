// @see https://github.com/angular/angular/blob/master/test-main.js

// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// Prevent Karma from starting synchronously.
__karma__.loaded = function(){};


function filterTestFiles(path) {
  return /\.spec\.js$/.test(path);
}

function importTestFiles(path) {
  return System
    .import(path)
    .then(function(module){
      if (module.hasOwnProperty('main')) {
        module.main();
      }
      else {
        throw new Error('Module ' + path + ' does not implement main() method.');
      }
    });
}

function loadTestFiles() {
  return Object
    .keys(window.__karma__.files)
    .filter(filterTestFiles)
    .map(importTestFiles);
}


System.config({
  baseURL: '/base/',
  defaultJSExtensions: true,
  paths: {
    '*': 'target/*',
    'angular2/*': 'target/lib/angular2/*',
    '@reactivex/rxjs/*': 'lib/@reactivex/rxjs/*.js'
  }
});


// Import all the specs
// Execute their `main()` method
// Kick off Karma (Jasmine)
System
  .import('angular2/src/core/dom/browser_adapter')
  .then(function(browser_adapter){
    browser_adapter.BrowserDomAdapter.makeCurrent();
  })
  .then(function(){
    return Promise.all(loadTestFiles())
  })
  .then(function(){
    __karma__.start();
  })
  .catch(function(error){
    console.error(error.stack || error);
    __karma__.start();
  });
