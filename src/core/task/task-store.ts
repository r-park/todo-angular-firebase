import { Inject, Injectable } from 'angular2/angular2';
import { AuthService } from '../auth/auth-service';
import { firebaseRef } from '../firebase/firebase-ref';
import { FirebaseStore } from '../firebase/firebase-store';
import { ITask } from './task';


@Injectable()
export class TaskStore extends FirebaseStore {
  constructor(@Inject(firebaseRef) ref: Firebase, auth: AuthService) {
    super(ref.child(`tasks/${auth.id}`));
  }

  get tasks(): ITask[] {
    return this.list;
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
}
