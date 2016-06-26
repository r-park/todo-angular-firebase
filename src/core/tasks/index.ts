import { TaskService } from './task-service';


export { TaskService };
export { ITask } from './task';


export const TASKS_PROVIDERS: any[] = [
  TaskService
];
