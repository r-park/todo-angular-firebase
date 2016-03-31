import 'rxjs/add/operator/map';

import { Injectable, Inject } from 'angular2/core';
import { AngularFire, FirebaseListObservable, FirebaseRef } from 'angularfire2';
import { AuthService } from 'src/core/auth';
import { ITask, Task } from './task';


@Injectable()
export class TaskService {
  taskItems$: FirebaseListObservable<ITask[]>;

  constructor(af: AngularFire, auth: AuthService, @Inject(FirebaseRef) private ref: Firebase) {
    const path = `/tasks/${auth.id}`;

    this.taskItems$ = af.list(path) as FirebaseListObservable<ITask[]>;

    // FirebaseListObservable currently lacks an `update()` method.
    // For now use FirebaseRef for updates.
    this.ref = ref.child(path);
  }

  createTask(title: string): Promise<any> {
    return this.taskItems$.add(new Task(title));
  }

  removeTask(task: ITask): Promise<any> {
    return this.taskItems$.remove(task.$key);
  }

  updateTask(task: ITask, changes: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.ref
        .child(task.$key)
        .update(changes, (error: Error) => {
          if (!error) {
            resolve();
          }
          else {
            console.error('ERROR @ updateTask :', error);
            reject();
          }
        });
    });
  }
}
