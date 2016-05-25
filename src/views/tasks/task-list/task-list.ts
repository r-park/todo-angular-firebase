import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from 'src/core/task';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    RouterLink,
    TaskItem
  ],
  pipes: [
    TaskListFilterPipe
  ],
  selector: 'task-list',
  styles: [
    require('./task-list.scss')
  ],
  template: `
    <ul class="task-filters">
      <li><a [class.active]="!filter" [routerLink]="['/Tasks']">View All</a></li>
      <li><a [class.active]="filter == 'active'" [routerLink]="['/Tasks', {filter: 'active'}]">Active</a></li>
      <li><a [class.active]="filter == 'completed'" [routerLink]="['/Tasks', {filter: 'completed'}]">Completed</a></li>
    </ul>
    
    <div class="task-list">
      <task-item
        *ngFor="let task of taskItems$ | async | filterTasks:filter"
        [task]="task"
        (remove)="remove.emit(task)"
        (update)="update.emit({task: task, changes: $event})"></task-item>
    </div>
  `
})

export class TaskList {
  @Input() filter: string;
  @Input() taskItems$: FirebaseListObservable<ITask[]>;

  @Output() remove: EventEmitter<ITask> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);
}
