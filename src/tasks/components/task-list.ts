import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from '../models/task';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    
    <ul class="task-filters">
      <li><button class="btn" (click)="markAllActive.emit()" type="button">Mark all Active</button></li>
      <li><button class="btn" (click)="markAllCompleted.emit()" type="button">Mark all Completed</button></li>
    </ul>
    
    <div class="task-list">
      <task-item
        *ngFor="let task of tasks | async | filterTasks:filter"
        [task]="task"
        (remove)="remove.emit(task)"
        (update)="update.emit({task: task, changes: $event})"></task-item>
    </div>
  `
})

export class TaskListComponent {
  @Input() filter: string;
  @Input() tasks: FirebaseListObservable<ITask[]>;

  @Output() markAllActive = new EventEmitter(false);
  @Output() markAllCompleted = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}
