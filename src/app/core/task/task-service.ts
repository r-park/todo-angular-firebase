import { Inject, Injectable } from 'angular2/angular2';
import { AuthService } from 'app/core/auth/auth-service';
import { firebaseRef } from 'app/core/firebase/firebase-ref';
import { ITask, Task } from './task';


@Injectable()
export class TaskService {
  private ref: Firebase;

  constructor(@Inject(firebaseRef) ref: Firebase, auth: AuthService) {
    this.ref = ref.child(`tasks/${auth.id}`);
  }

  createTask(title: string): void {
    this.ref.push(new Task(title));
  }

  deleteTask(task: ITask): void {
    this.ref.child(task.key).remove();
  }

  updateTask(task: ITask, changes: any): void {
    this.ref.child(task.key).update(changes);
  }
}
