import { Component } from '@angular/core';
import { CanActivate } from '@angular/router-deprecated';
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
          [filter]="taskFilter"
          [taskItems$]="taskService.taskItems$"
          (remove)="taskService.removeTask($event)"
          (update)="taskService.updateTask($event.task, $event.changes)"></task-list>
      </div>
    </div>
  `
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class Tasks {
  taskFilter: string;

  constructor(public taskService: TaskService) {}

  routerCanReuse(): boolean {
    return true;
  }

  routerOnActivate(nextInstruction: any): void {
    this.taskFilter = nextInstruction.params.filter;
  }

  routerOnReuse(nextInstruction: any): void {
    this.taskFilter = nextInstruction.params.filter;
  }
}
