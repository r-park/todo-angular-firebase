import {
  AuthMethods,
  defaultFirebase,
  FIREBASE_PROVIDERS,
  firebaseAuthConfig
} from 'angularfire2';


export const FIREBASE_APP_PROVIDERS: any[] = [
  FIREBASE_PROVIDERS,
  //defaultFirebase('https://ng2-todo-app.firebaseio.com'),
  defaultFirebase('https://blinding-torch-9765.firebaseio.com'),
  firebaseAuthConfig({
    method: AuthMethods.Popup
  })
];
