import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/switchMap';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from 'src/auth';
import { ITask, Task } from '../models/task';


@Injectable()
export class TaskService {
  taskStore$: BehaviorSubject<ITask[]> = new BehaviorSubject([]);
  private tasks$: FirebaseListObservable<ITask[]>;


  constructor(af: AngularFire, auth: AuthService) {
    this.tasks$ = af.database.list(`/tasks/${auth.id}`);
    this.tasks$.subscribe(tasks => this.taskStore$.next(tasks));
  }

  createTask(title: string): firebase.Promise<any> {
    return this.tasks$.push(new Task(title));
  }

  removeTask(task: ITask): firebase.Promise<any> {
    return this.tasks$.remove(task.$key);
  }

  updateTask(task: ITask, changes: any): firebase.Promise<any> {
    return this.tasks$.update(task.$key, changes);
  }

  markAllActive(): void {
    this.taskStore$
      .take(1)
      .subscribe(tasks => {
        tasks.forEach(task => {
          if (task.completed) {
            this.updateTask(task, {completed: false});
          }
        });
      });
  }

  markAllCompleted(): void {
    this.taskStore$
      .take(1)
      .subscribe(tasks => {
        tasks.forEach(task => {
          if (!task.completed) {
            this.updateTask(task, {completed: true});
          }
        });
      });
  }
}
