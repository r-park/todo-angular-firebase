import { TaskService } from './task-service';


export { TaskService };
export { ITask } from './task';


export const TASK_PROVIDERS: any[] = [
  TaskService
];
