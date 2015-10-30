import { ITask } from './task';


export class TaskStore {
  list: ITask[] = [];
  ready: Promise<any>;

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

  created(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.indexOf(key);
    if (index === -1) {
      let task: ITask = snapshot.val();
      task.key = key;
      this.list.push(task);
    }
  }

  deleted(snapshot: FirebaseDataSnapshot): void {
    let index: number = this.indexOf(snapshot.key());
    if (index !== -1) {
      this.list.splice(index, 1);
    }
  }

  updated(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.indexOf(key);
    if (index !== -1) {
      let task: ITask = snapshot.val();
      task.key = key;
      this.list[index] = task;
    }
  }

  private indexOf(key: string): number {
    let result: number = -1;

    this.list.some((task: ITask, index: number) => {
      let found: boolean = task.key === key;
      if (found) {
        result = index;
      }
      return found;
    });

    return result;
  }
}
