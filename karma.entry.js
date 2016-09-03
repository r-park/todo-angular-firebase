require('core-js/es6/array');
require('core-js/es6/map');
require('core-js/es6/set');
require('core-js/es6/string');
require('core-js/es6/symbol');
require('core-js/fn/object/assign');
require('core-js/es7/reflect');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/proxy');
require('zone.js/dist/sync-test');
require('zone.js/dist/jasmine-patch');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');

require('ts-helpers');

require('firebase/firebase-browser');


Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;


var browser = require('@angular/platform-browser-dynamic/testing');
var testing = require('@angular/core/testing');

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);


// Load source files
var context = require.context('./src', true, /\.ts/);

var exclude = [
  './main.ts',
  './polyfills.ts',
  './vendor.ts'
];

context.keys().forEach(function(key) {
  if (exclude.indexOf(key) === -1) context(key);
});
