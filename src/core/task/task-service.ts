import { ITask, Task } from './task';


export class TaskService {
  constructor(private ref: Firebase) {}

  createTask(title: string): void {
    this.ref.push(new Task(title), (error: Error) => {
      if (error) {
        console.error('ERROR @ createTask :', error);
      }
    });
  }

  deleteTask(task: ITask): void {
    this.ref.child(task.key).remove((error: Error) => {
      if (error) {
        console.error('ERROR @ deleteTask :', error);
      }
    });
  }

  updateTask(task: ITask, changes: any): void {
    this.ref.child(task.key).update(changes, (error: Error) => {
      if (error) {
        console.error('ERROR @ updateTask :', error);
      }
    });
  }
}
