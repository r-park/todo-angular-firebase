import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from 'src/core/tasks';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
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
      <li><a [class.active]="!filter" [routerLink]="['/tasks']">View All</a></li>
      <li><a [class.active]="filter == 'active'" [routerLink]="['/tasks', {filter: 'active'}]">Active</a></li>
      <li><a [class.active]="filter == 'completed'" [routerLink]="['/tasks', {filter: 'completed'}]">Completed</a></li>
    </ul>
    
    <div class="task-list">
      <task-item
        *ngFor="let task of taskItems | async | filterTasks:filter"
        [task]="task"
        (remove)="remove.emit(task)"
        (update)="update.emit({task: task, changes: $event})"></task-item>
    </div>
  `
})

export class TaskList {
  @Input() filter: string;
  @Input() taskItems: FirebaseListObservable<ITask[]>;

  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);
}
