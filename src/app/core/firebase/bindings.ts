import { bind } from 'angular2/angular2';
import { firebaseRef } from './firebase-ref';


export const FIREBASE_BINDINGS: Array<any> = [
  bind(firebaseRef).toValue(firebaseRef)
];
