import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
    apiKey: 'AIzaSyCrjfYhKvR6tNEL5RJv9noe5mDRRxfFrb0',
    authDomain: 'mopeds-f3929.firebaseapp.com',
    databaseURL: 'https://mopeds-f3929.firebaseio.com',
    storageBucket: 'mopeds-f3929.appspot.com',
    messagingSenderId: '167595630277'
  };
const firebaseAuthConfig = {
  method: AuthMethods.Popup,
  remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
