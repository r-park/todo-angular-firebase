import 'rxjs/add/operator/do';
import 'rxjs/add/operator/pluck';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TasksService } from '../../tasks.service';


@Component({
  selector: 'app-tasks',
  template: `
    <div class="g-row">
      <div class="g-col">
        <app-task-form (createTask)="tasksService.createTask($event)"></app-task-form>
      </div>

      <div class="g-col">
        <app-task-list
          [filter]="filter | async"
          [tasks]="tasksService.visibleTasks$"
          (remove)="tasksService.removeTask($event)"
          (update)="tasksService.updateTask($event.task, $event.changes)"></app-task-list>
      </div>
    </div>
  `
})
export class TasksComponent implements OnInit {
  filter: Observable<any>;

  constructor(
    public route: ActivatedRoute,
    public tasksService: TasksService
  ) {}

  ngOnInit() {
    this.filter = this.route.params
      .pluck('completed')
      .do((value: string) => this.tasksService.filterTasks(value));
  }
}
