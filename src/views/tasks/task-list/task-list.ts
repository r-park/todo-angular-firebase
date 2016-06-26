import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from 'src/core/tasks';
import { TaskItem } from '../task-item/task-item';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  directives: [
    TaskItem
  ],
  selector: 'task-list',
  styles: [
    require('./task-list.scss')
  ],
  template: `
    <ul class="task-filters">
      <li><a [class.active]="!filter" [routerLink]="['/tasks']">View All</a></li>
      <li><a [class.active]="filter === 'false'" [routerLink]="['/tasks', {completed: false}]">Active</a></li>
      <li><a [class.active]="filter === 'true'" [routerLink]="['/tasks', {completed: true}]">Completed</a></li>
    </ul>
    
    <div class="task-list">
      <task-item
        *ngFor="let task of tasks | async"
        [task]="task"
        (remove)="remove.emit(task)"
        (update)="update.emit({task: task, changes: $event})"></task-item>
    </div>
  `
})

export class TaskList {
  @Input() filter: string;
  @Input() tasks: FirebaseListObservable<ITask[]>;

  @Output() remove: EventEmitter<any> = new EventEmitter(false);
  @Output() update: EventEmitter<any> = new EventEmitter(false);
}
