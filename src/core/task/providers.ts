import { provide } from 'angular2/angular2';
import Firebase from 'firebase';
import { AuthService } from 'core/auth/auth-service';
import { TaskService } from 'core/task/task-service';
import { TaskStore } from 'core/task/task-store';


export const TASK_PROVIDERS: any[] = [
  provide(TaskService, {
    deps: [AuthService],
    useFactory: (auth: AuthService): TaskService => {
      return new TaskService(new Firebase(`https://ng2-todo-app.firebaseio.com/tasks/${auth.id}`));
    }
  }),

  provide(TaskStore, {
    deps: [AuthService],
    useFactory: (auth: AuthService): TaskStore => {
      return new TaskStore(new Firebase(`https://ng2-todo-app.firebaseio.com/tasks/${auth.id}`));
    }
  })
];
