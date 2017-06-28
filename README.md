[![CircleCI](https://circleci.com/gh/r-park/todo-angular2-firebase.svg?style=shield&circle-token=7f6c19e82f8464c0dc18797b6146767f66d49f90)](https://circleci.com/gh/r-park/todo-angular2-firebase)


# Todo app with Angular 4, AngularFire2, and Firebase SDK 3
A simple Todo app example built with **Angular 4** and **AngularFire2**. The app features a **Firebase** backend with **OAuth** authentication. Try the demo at <a href="https://ng2-todo-app.firebaseapp.com" target="_blank">ng2-todo-app.firebaseapp.com</a>.

- Angular `4.2.4`
- AngularFire2 `4.0.0-rc.1`
- Firebase SDK 3
  - JSON Datastore
  - OAuth authentication with GitHub, Google, and Twitter
  - Hosting
- RxJS
- SASS
- Typescript
- Angular CLI

Quick Start
-----------

Prerequisits
Required - Angular CLI
Recommended - Yarn

```shell
$ git clone https://github.com/r-park/todo-angular2-firebase.git
$ cd todo-angular2-firebase
$ yarn
$ ng serve
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
$ yarn global add firebase-tools
```

#### Build and deploy the app:
```shell
$ ng build
$ firebase login
$ firebase use default
$ firebase deploy
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
