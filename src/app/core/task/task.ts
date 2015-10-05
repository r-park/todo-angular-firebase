import { Injectable } from 'angular2/angular2';
import Firebase from 'firebase';


export interface ITask {
  completed: boolean;
  createdAt: any;
  key?: string;
  title: string;
}


@Injectable()
export class Task implements ITask {
  completed: boolean = false;
  createdAt: any = Firebase.ServerValue.TIMESTAMP;
  title: string;

  constructor(title: string = '') {
    this.title = title;
  }
}
