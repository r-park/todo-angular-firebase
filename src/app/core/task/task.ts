import { Injectable } from 'angular2/angular2';


export interface ITask {
  completed: boolean;
  key?: string;
  title: string;
}


@Injectable()
export class Task implements ITask {
  completed: boolean;
  title: string;

  constructor(title: string = '') {
    this.completed = false;
    this.title = title;
  }
}
