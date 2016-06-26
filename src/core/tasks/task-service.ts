import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from 'src/core/auth';
import { ITask, Task } from './task';


@Injectable()
export class TaskService {
  taskItems$: FirebaseListObservable<ITask[]>;

  constructor(af: AngularFire, auth: AuthService) {
    this.taskItems$ = af.database.list(`/tasks/${auth.id}`) as FirebaseListObservable<ITask[]>;
  }

  createTask(title: string): firebase.Promise<any> {
    return this.taskItems$.push(new Task(title));
  }

  removeTask(task: ITask): firebase.Promise<any> {
    return this.taskItems$.remove(task.$key);
  }

  updateTask(task: ITask, changes: any): firebase.Promise<any> {
    return this.taskItems$.update(task.$key, changes);
  }
}
