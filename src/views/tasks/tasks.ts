import 'rxjs/add/operator/pluck';

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
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
          [filter]="taskFilter | async"
          [taskItems]="taskService.taskItems$"
          (remove)="taskService.removeTask($event)"
          (update)="taskService.updateTask($event.task, $event.changes)"></task-list>
      </div>
    </div>
  `
})

export class Tasks {
  taskFilter: Observable<any>;

  constructor(public route: ActivatedRoute, public taskService: TaskService) {
    this.taskFilter = route.params.pluck('filter');
  }
}
