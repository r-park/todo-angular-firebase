[![Build Status](https://travis-ci.org/r-park/todo-angular2-firebase.svg?branch=master)](https://travis-ci.org/r-park/todo-angular2-firebase)
[![Coverage Status](https://coveralls.io/repos/r-park/todo-angular2-firebase/badge.svg?branch=master&service=github)](https://coveralls.io/github/r-park/todo-angular2-firebase?branch=master)


# Todo app with Angular 2 and Firebase
- Angular 2 alpha.44
- Firebase
- Typescript
- SystemJS
- SASS

## Installing dependencies
```bash
npm install
```

#### Gulp v4
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp. For example:
```bash
./node_modules/.bin/gulp run
```

#### Installing Gulp v4 (optional)
```bash
npm install -g gulpjs/gulp-cli#4.0
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
gulp test
```
The following command will run the test suites, then watch for changes to the source files, and re-run the tests whenever the sources are modified.
```bash
gulp test.watch
```
