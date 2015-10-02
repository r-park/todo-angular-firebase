import { Inject } from 'angular2/angular2';
import { firebaseRef } from '../firebase/firebase-ref';
import { ITask, Task } from './task';


export class TaskService {
  private ref: Firebase;

  constructor(@Inject(firebaseRef) ref: Firebase) {
    this.ref = ref.child('tasks');
  }

  createTask(title: string): void {
    this.ref.push(new Task(title));
  }

  deleteTask(task: ITask): void {
    this.ref.child(task.key).remove();
  }

  updateTask(task: ITask): void {
    this.ref.child(task.key).update(task);
  }
}
