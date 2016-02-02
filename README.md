[![Build Status](https://travis-ci.org/r-park/todo-angular2-firebase.svg?branch=master)](https://travis-ci.org/r-park/todo-angular2-firebase)


# Todo app with Angular 2 and Firebase
A simple Todo app example built with **Angular 2**. The app features a **Firebase** backend with **OAuth** authentication, and an **immutable** task list. Try the demo at <a href="https://ng2-todo-app.firebaseapp.com" target="_blank">ng2-todo-app.firebaseapp.com</a>, and check out the <a href="https://github.com/r-park/angular2-webpack-seed" target="_blank">webpack seed</a> this project is based on.

- Angular
- Firebase
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting
- Gulp
- Immutable
- RxJS
- SASS
- Typescript
- Webpack
  - Inlines external SCSS files
  - Inlines external HTML templates
  - Bundles and minifies release builds
  - Injects style and script tags into index.html


## Quick Start
```bash
$ git clone https://github.com/r-park/todo-angular2-firebase.git
$ cd todo-angular2-firebase
$ npm install
$ ./node_modules/.bin/gulp
```


## Developing
### Prerequisites
- `node >=5.2`

### Installing Global Dependencies
```bash
$ npm install -g karma-cli
```

##### Webpack (optional)
```bash
$ npm install -g webpack
$ npm install -g webpack-dev-server
```

##### Gulp v4 (optional)
```bash
$ npm install -g gulpjs/gulp-cli#4.0
```
The gulp tasks for this project require gulp v4-alpha. If you don't wish to globally install the v4 gulp-cli, you can run the gulp tasks using the locally installed gulp under `./node_modules/.bin` — for example:
```bash
$ ./node_modules/.bin/gulp run
```


### Installing Project-local Dependencies
```bash
$ npm install
```


## Commands
#### Develop
```bash
$ gulp
```
- Start the Webpack dev server at <a href="http://localhost:3000" target="_blank">localhost:3000</a>
- Watch for changes to your source files
- Live-reload the browser

#### Lint (tslint)
```bash
$ gulp lint
```

#### Test (single-run)
```bash
$ gulp test
```

#### Test (watch mode)
```bash
$ gulp test.watch
```

#### Build
```bash
$ gulp build
```

#### Dist build
```bash
$ gulp dist
```
Executes the following:
- `gulp lint`
- `gulp test`
- `gulp build`
