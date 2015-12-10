[![Build Status](https://travis-ci.org/r-park/todo-angular2-firebase.svg?branch=master)](https://travis-ci.org/r-park/todo-angular2-firebase)


# Todo app with Angular 2 and Firebase
A simple Todo app example built with **Angular 2**. The app features a **Firebase** backend with **OAuth** authentication, and an **immutable** task list. Try the demo at <a href="https://ng2-todo-app.firebaseapp.com" target="_blank">https://ng2-todo-app.firebaseapp.com</a>.

- Angular `2.0.0-alpha.50`
- Firebase
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting
- Gulp `4.0.0-alpha.2`
- Immutable
- SASS
- Typescript `~1.7.3`
- Webpack
  - Development server
  - Inline external SCSS files
  - Inline external HTML templates
  - Bundle and minify release builds
  - Inject style and script tags into index.html


## Installing Dependencies
```bash
$ npm install
```


#### Gulp v4 (optional)
```bash
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
$ ./node_modules/.bin/gulp run
```


## Developing
```bash
$ gulp
```
Or via locally installed gulp:
```bash
$ ./node_modules/.bin/gulp
```
Or via npm:
```bash
$ npm start
```
This will start the Webpack dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>, watch for changes to the source files and live-reload the browser.


## Manual Builds
```bash
$ gulp build
```
This will generate minified build artifacts into `/target` directory. Run `gulp serve` to start a BrowserSync server in this directory.


## Testing
```bash
$ gulp test.watch
```
Executing `gulp test.watch` will:
- Run the test suites
- Watch for changes to the source files
- Re-run the tests whenever the sources are modified

For a single test run without auto-watch, execute `gulp test` instead.

