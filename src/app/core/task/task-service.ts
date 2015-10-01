import { Inject, Injectable } from 'angular2/angular2';
import Firebase from 'firebase';
import { firebaseRef } from '../firebase/firebase-ref';
import { ITask, Task } from './task';


@Injectable()
export class TaskService {
  tasks: ITask[];
  private ref: Firebase;

  constructor(@Inject(firebaseRef) ref: Firebase) {
    this.tasks = [];
    this.ref = ref.child('tasks');
    this.ref.on('child_added', this._added.bind(this));
    this.ref.on('child_changed', this._changed.bind(this));
    this.ref.on('child_removed', this._removed.bind(this));
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

  filterActiveTasks(): ITask[] {
    return this.tasks.filter((task: ITask) => {
      return task.completed === false;
    });
  }

  filterCompletedTasks(): ITask[] {
    return this.tasks.filter((task: ITask) => {
      return task.completed;
    });
  }

  _added(snapshot: FirebaseDataSnapshot): void {
    const task: ITask = snapshot.val();
    task.key = snapshot.key();
    this.tasks.push(task);
  }

  _changed(snapshot: FirebaseDataSnapshot): void {
    const key: string = snapshot.key();
    const index: number = this._indexOf(this.tasks, key);
    if (index > 1) {
      this.tasks[index] = snapshot.val();
      this.tasks[index].key = key;
    }
  }

  _removed(snapshot: FirebaseDataSnapshot): void {
    const index: number = this._indexOf(this.tasks, snapshot.key());
    if (index > 1) {
      this.tasks.splice(index, 1);
    }
  }

  _indexOf(list: ITask[], key: string): number {
    let result: number = -1;
    list.some((task: ITask, index: number) => {
      let found: boolean = task.key === key;
      if (found) {
        result = index;
      }
      return found;
    });
    return result;
  }
}
