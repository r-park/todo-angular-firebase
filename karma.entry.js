// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

require('reflect-metadata');
require('angular2/testing');

// Override global `Firebase` with `MockFirebase`
MockFirebase.override();

// Recursively find all spec files using provided regexp
var context = require.context('./src', true, /\.spec\.ts/);
// Load found spec files
context.keys().forEach(context);

// Use the `BrowserDomAdapter`
var domAdapter = require('angular2/src/platform/browser/browser_adapter').BrowserDomAdapter;
domAdapter.makeCurrent();
