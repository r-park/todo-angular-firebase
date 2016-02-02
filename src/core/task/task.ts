export interface ITask {
  completed: boolean;
  createdAt: number;
  key?: string;
  title: string;
}


export class Task implements ITask {
  completed: boolean = false;
  createdAt: number = Firebase.ServerValue.TIMESTAMP;
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
