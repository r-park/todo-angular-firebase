[![CircleCI](https://circleci.com/gh/r-park/todo-angular-firebase.svg?style=shield&circle-token=d1a31de32e5baabbf59aa8f78ba251254261fb3a)](https://circleci.com/gh/r-park/todo-angular-firebase)


# Todo app with Angular, AngularFire2, and Firebase
A simple Todo app example built with **Angular**, **Angular CLI** and **AngularFire2**. The app features a **Firebase** backend with **OAuth** authentication. Try the demo at <a href="https://ng2-todo-app.firebaseapp.com" target="_blank">ng2-todo-app.firebaseapp.com</a>.


Stack
-----

- Angular 4
- Angular CLI
- AngularFire2 `4.0.0-rc.1`
- Firebase
- RxJS
- SASS
- Typescript


Quick Start
-----------

#### Install Angular CLI

```shell
$ npm install -g @angular/cli
```

#### Clone the app, install package dependencies, and start the dev server @ `localhost:4200`

```shell
$ git clone https://github.com/r-park/todo-angular-firebase.git
$ cd todo-angular-firebase
$ npm install
$ npm start
```


## Deploying to Firebase
#### Prerequisites
- Create a free Firebase account at https://firebase.google.com
- Create a project from your [Firebase account console](https://console.firebase.google.com)
- Configure the authentication providers for your Firebase project from your Firebase account console

#### Configure this app with your project-specific details

Edit `.firebaserc` in the project root:

```json
{
  "projects": {
    "default": "your-project-id"
  }
}
```

Edit the firebase configuration in `src/environments/firebase.ts`

```typescript
export const firebaseConfig = {
  apiKey: 'your api key',
  authDomain: 'your-project-id.firebaseapp.com',
  databaseURL: 'https://your-project-id.firebaseio.com',
  storageBucket: 'your-project-id.appspot.com'
};
```

#### Install firebase-tools
```shell
$ npm install -g firebase-tools
```

#### Build and deploy the app
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
|`npm start`|Start development server @ `localhost:4200`|
|`npm run build`|build the application to `./dist`|
|`npm run lint`|Lint `.ts` files|
