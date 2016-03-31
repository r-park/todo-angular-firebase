require('angular2/bundles/angular2-polyfills');

// Specify platform and application providers
var browser = require('angular2/platform/testing/browser');
var testing = require('angular2/testing');

testing.setBaseTestProviders(
  browser.TEST_BROWSER_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_APPLICATION_PROVIDERS
);

// Turn on full stack traces in errors to help debugging
Error.stackTraceLimit = Infinity;

jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// Recursively discover all spec files
var context = require.context('./src', true, /\.spec\.ts/);

// Load discovered spec files
context.keys().forEach(context);
