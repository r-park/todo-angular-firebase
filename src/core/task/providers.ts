import { provide } from 'angular2/core';
import { FIREBASE_TASKS_URL } from '../../config';
import { AuthService } from '../auth/auth-service';
import { TaskService } from './task-service';
import { TaskStore } from './task-store';


export const TASK_PROVIDERS: any[] = [
  provide(TaskService, {
    deps: [AuthService],
    useFactory: (auth: AuthService): TaskService => {
      return new TaskService(new Firebase(`${FIREBASE_TASKS_URL}/${auth.id}`));
    }
  }),

  provide(TaskStore, {
    deps: [AuthService],
    useFactory: (auth: AuthService): TaskStore => {
      return new TaskStore(new Firebase(`${FIREBASE_TASKS_URL}/${auth.id}`));
    }
  })
];
