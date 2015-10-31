[![Build Status](https://travis-ci.org/r-park/todo-angular2-firebase.svg?branch=master)](https://travis-ci.org/r-park/todo-angular2-firebase)


# Todo app with Angular 2 and Firebase
A simple Todo app example built with **Angular 2**. The app features a **Firebase** backend with **OAuth** authentication, and an **immutable** task list. Try the demo at <a href="https://ng2-todo-app.firebaseapp.com" target="_blank">https://ng2-todo-app.firebaseapp.com</a>.

- Angular `2.0.0-alpha.45`
- Firebase
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting
- Immutable
- Typescript
- SystemJS
- SASS
- Gulp `4.0.0-alpha.1`

## Installing dependencies
```bash
npm install
```

#### Gulp v4 (optional)
```bash
npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
./node_modules/.bin/gulp run
```

## Running the app
```bash
gulp run
```
Executing `gulp run` will:
- Build the project
- Start the server at <a href="http://localhost:7000" target="_blank">localhost:7000</a>

## Developing
```bash
gulp
```
Executing the default `gulp` command will:
- Build the project
- Start the server at <a href="http://localhost:7000" target="_blank">localhost:7000</a>
- Watch for changes to the source files and process changes
- Live-reload the browser

## Testing
```bash
gulp test.watch
```
Executing `gulp test.watch` will:
- Run the test suites
- Watch for changes to the source files
- Re-run the tests whenever the sources are modified

For a single test run without auto-watch, execute `gulp test` instead.

