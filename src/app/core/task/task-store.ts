import { EventEmitter, Inject, Injectable } from 'angular2/angular2';
import { AuthService } from 'app/core/auth/auth-service';
import { firebaseRef } from 'app/core/firebase/firebase-ref';
import { ITask } from './task';


@Injectable()
export class TaskStore {
  ready: Promise<any>;
  tasks: ITask[] = [];
  private emitter: EventEmitter = new EventEmitter();
  private ref: Firebase;

  constructor(@Inject(firebaseRef) ref: Firebase, auth: AuthService) {
    this.ref = ref.child(`tasks/${auth.id}`);
    this.ref.on('child_added', this._added.bind(this));
    this.ref.on('child_changed', this._changed.bind(this));
    this.ref.on('child_removed', this._removed.bind(this));

    this.ready = new Promise<any>((resolve: (value?: any) => void) => {
      this.ref.once('value', () => resolve());
    });
  }

  subscribe(generator: any): any {
    return this.emitter.observer(generator);
  }

  filterActiveTasks(): ITask[] {
    return this.tasks.filter((task: ITask) => {
      return !task.completed;
    });
  }

  filterCompletedTasks(): ITask[] {
    return this.tasks.filter((task: ITask) => {
      return task.completed;
    });
  }

  _added(snapshot: FirebaseDataSnapshot): void {
    let task: ITask = snapshot.val();
    task.key = snapshot.key();
    this.tasks.push(task);
    this.emitter.next(this.tasks);
  }

  _changed(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this._indexOf(this.tasks, key);
    if (index > -1) {
      this.tasks[index] = snapshot.val();
      this.tasks[index].key = key;
    }
  }

  _removed(snapshot: FirebaseDataSnapshot): void {
    let index: number = this._indexOf(this.tasks, snapshot.key());
    if (index > -1) {
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
