import { EventEmitter } from 'angular2/angular2';


export class FirebaseStore {
  ready: Promise<any>;
  protected list: any[] = [];
  protected emitter: EventEmitter = new EventEmitter();

  constructor(private ref: Firebase) {
    this.ref.on('child_added', this.created.bind(this));
    this.ref.on('child_removed', this.deleted.bind(this));
    this.ref.on('child_changed', this.updated.bind(this));

    this.ready = new Promise<any>((resolve: (value?: any) => void) => {
      this.ref.once('value', resolve);
    });
  }

  subscribe(generator: any): any {
    return this.emitter.observer(generator);
  }

  protected created(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    // check to make sure record does not exist
    let index: number = this.indexOf(key);
    if (index === -1) {
      let record: any = snapshot.val();
      record.key = key;
      this.list.push(record);
      this.emitter.next(this.list);
    }
  }

  protected deleted(snapshot: FirebaseDataSnapshot): void {
    let index: number = this.indexOf(snapshot.key());
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  protected updated(snapshot: FirebaseDataSnapshot): void {
    let key: string = snapshot.key();
    let index: number = this.indexOf(key);
    if (index > -1) {
      this.list[index] = snapshot.val();
      this.list[index].key = key;
    }
  }

  protected indexOf(key: string): number {
    let result: number = -1;

    this.list.some((record: any, index: number) => {
      let found: boolean = record.key === key;
      if (found) {
        result = index;
      }
      return found;
    });

    return result;
  }
}
