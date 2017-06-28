import * as firebase from 'firebase/app';
import { ITask } from './interfaces';


export class Task implements ITask {
  completed = false;
  createdAt = firebase.database.ServerValue.TIMESTAMP;
  title;

  constructor(title: string) {
    this.title = title;
  }
}
