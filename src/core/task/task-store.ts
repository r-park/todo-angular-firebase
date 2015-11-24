import { List } from 'immutable';
import { ReplaySubject } from '@reactivex/rxjs/dist/cjs/Rx';
import { ITask } from './task';


export class TaskStore {
  tasks: ReplaySubject<any> = new ReplaySubject(1);
  private list: List<any> = List();

  constructor(ref: Firebase) {
    ref.on('child_added', this.created.bind(this));
    ref.on('child_changed', this.updated.bind(this));
    ref.on('child_removed', this.deleted.bind(this));
    ref.once('value', () => this.emit());
  }

  emit(): void {
    this.tasks.next(this.list);
  }

  subscribe(next: (list: List<any>) => void): any {
    return this.tasks.subscribe(next);
  }

  private created(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.findIndex(key);
    if (index === -1) {
      let task: ITask = snapshot.val();
      task.key = key;
      this.list = this.list.push(task);
    }
  }

  private deleted(snapshot: FirebaseDataSnapshot): void {
    let index: number = this.findIndex(snapshot.key());
    if (index !== -1) {
      this.list = this.list.delete(index);
      this.emit();
    }
  }

  private updated(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.findIndex(key);
    if (index !== -1) {
      let task: ITask = snapshot.val();
      task.key = key;
      this.list = this.list.set(index, task);
      this.emit();
    }
  }

  private findIndex(key: string): number {
    return this.list.findIndex((task: ITask) => {
      return task.key === key;
    });
  }
}
