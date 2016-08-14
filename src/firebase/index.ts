import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
  apiKey: 'AIzaSyDaEW83qAOozjJbbJP1YYbEHxxfFksdSHQ',
  authDomain: 'ng2-todo-app.firebaseapp.com',
  databaseURL: 'https://ng2-todo-app.firebaseio.com',
  storageBucket: 'ng2-todo-app.appspot.com'
};

const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
