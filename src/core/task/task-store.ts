import { EventEmitter } from 'angular2/angular2';
import { List } from 'immutable';
import { ITask } from './task';


export class TaskStore {
  list: List<any> = List();
  ready: Promise<any>;
  private emitter: EventEmitter = new EventEmitter();

  constructor(private ref: Firebase) {
    this.ref.on('child_added', this.created.bind(this));
    this.ref.on('child_changed', this.updated.bind(this));
    this.ref.on('child_removed', this.deleted.bind(this));

    this.ready = new Promise((resolve: () => void) => {
      this.ref.once('value', () => {
        resolve();
      });
    });
  }

  subscribe(next: (list: List<any>) => void): any {
    return this.emitter.observer({next});
  }

  created(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.findIndex(key);
    if (index === -1) {
      let task: ITask = snapshot.val();
      task.key = key;
      this.list = this.list.push(task);
    }
  }

  deleted(snapshot: FirebaseDataSnapshot): void {
    let index: number = this.findIndex(snapshot.key());
    if (index !== -1) {
      this.list = this.list.delete(index);
      this.emitter.next(this.list);
    }
  }

  updated(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.findIndex(key);
    if (index !== -1) {
      let task: ITask = snapshot.val();
      task.key = key;
      this.list = this.list.set(index, task);
      this.emitter.next(this.list);
    }
  }

  private findIndex(key: string): number {
    return this.list.findIndex((task: ITask) => {
      return task.key === key;
    });
  }
}
