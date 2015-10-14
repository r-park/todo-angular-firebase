import { Task } from './task';
import { TaskService } from './task-service';
import { TaskStore } from './task-store';


export const TASK_PROVIDERS: Array<any> = [
  Task,
  TaskService,
  TaskStore
];
