// Tun on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// Prevent Karma from starting synchronously.
__karma__.loaded = function(){};


System.config({
  packages: {
    'base/target': {
      defaultExtension: 'js',
      format: 'register',
      map: Object.keys(window.__karma__.files)
        .filter(filterSourceFiles)
        .reduce(function(mapping, path){
          var moduleName = path.replace(/^\/base\/target\//, './').replace(/\.js$/, '');
          mapping[moduleName] = path + '?' + window.__karma__.files[path];
          return mapping;
        }, {})
    }
  },

  paths: {
    'firebase': '/base/target/utils/firebase.js'
  }
});


System.import('angular2/src/core/dom/browser_adapter')
  .then(function(browserAdapter){
    browserAdapter.BrowserDomAdapter.makeCurrent();
  })
  .then(function(){
    return Promise.all(loadTestFiles());
  })
  .then(function(){
    __karma__.start();
  })
  .catch(function(error){
    __karma__.error(error.stack || error);
  });


function filterSourceFiles(path) {
  return /^\/base\/target\/.*\.js$/.test(path)
}

function filterTestFiles(path) {
  return /\.spec\.js$/.test(path);
}

function importTestFiles(path) {
  return System.import(path);
}

function loadTestFiles() {
  return Object.keys(window.__karma__.files)
    .filter(filterTestFiles)
    .map(importTestFiles);
}
