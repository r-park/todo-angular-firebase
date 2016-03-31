import { Component } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from 'src/core/auth';
import { TaskService } from 'src/core/task';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  directives: [
    TaskForm,
    TaskList
  ],
  selector: 'tasks',
  template: `
    <div class="g-row">
      <div class="g-col">
        <task-form (createTask)="taskService.createTask($event)"></task-form>
      </div>
    
      <div class="g-col">
        <task-list 
          [taskItems$]="taskService.taskItems$"
          (remove)="taskService.removeTask($event)"
          (update)="taskService.updateTask($event.task, $event.changes)"></task-list>
      </div>
    </div>
  `
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class Tasks {
  constructor(private taskService: TaskService) {}
}
