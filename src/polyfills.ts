// Core-JS
import 'core-js/es6/array';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/string';
import 'core-js/es6/symbol';
import 'core-js/es7/reflect';
import 'core-js/fn/object/assign';

// Zone
import 'zone.js/dist/zone';

// Typescript helpers
import 'ts-helpers';


if (process.env.NODE_ENV === 'development') {
  Error.stackTraceLimit = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
