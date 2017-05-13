[![CircleCI](https://circleci.com/gh/r-park/todo-angular2-firebase.svg?style=shield&circle-token=7f6c19e82f8464c0dc18797b6146767f66d49f90)](https://circleci.com/gh/r-park/todo-angular2-firebase)


# Todo app with Angular 4, AngularFire2, and Firebase SDK 3
A simple Todo app example built with **Angular 4** and **AngularFire2**. The app features a **Firebase** backend with **OAuth** authentication. Try the demo at <a href="https://ng2-todo-app.firebaseapp.com" target="_blank">ng2-todo-app.firebaseapp.com</a>.

- Angular `4.1.2`
- AngularFire2 `4.0.0-rc.0`
- Firebase SDK 3
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting
- RxJS
- SASS
- Typescript
- Webpack
  - Inlines external SCSS files
  - Bundles and minifies release builds
  - Injects style and script tags into index.html


Quick Start
-----------

```shell
$ git clone https://github.com/r-park/todo-angular2-firebase.git
$ cd todo-angular2-firebase
$ npm install
$ npm start
```


## Deploying to Firebase
#### Prerequisites:
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details:
```javascript
// .firebaserc

{
  "projects": {
    "default": "your-project-id"
  }
}
```
```javascript
// src/firebase/index.ts

export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

#### Install firebase-tools:
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app:
```shell
$ npm run build
$ firebase login
$ firebase use default
$ firebase deploy
```


Commands
--------

|Script|Description|
|---|---|
|`npm start`|Start webpack development server @ `localhost:3000`|
|`npm run build`|Lint, test, and build the application to `./target`|
|`npm run lint`|Lint `.ts` and `.js` files|
|`npm run lint:js`|Lint `.js` files with eslint|
|`npm run lint:ts`|Lint `.ts` files with tslint|
|`npm run server`|Start express server @ `localhost:3001` to serve built artifacts from `./target` (must run `npm run build` first)|
|`npm test`|Run unit tests with Karma and Jasmine|
|`npm run test:watch`|Run unit tests with Karma and Jasmine; watch for changes to re-run tests|
