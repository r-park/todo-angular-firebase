import { provide } from 'angular2/angular2';
import { firebaseRef } from './firebase-ref';


export const FIREBASE_PROVIDERS: Array<any> = [
  provide(firebaseRef, {useValue: firebaseRef})
];
