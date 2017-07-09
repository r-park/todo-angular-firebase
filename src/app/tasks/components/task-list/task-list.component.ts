import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ITask } from '../../models';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-task-list',
  styleUrls: ['./task-list.component.scss'],
  template: `
    <ul class="task-filters">
      <li><a [class.active]="!filter" [routerLink]="['/tasks']">View All</a></li>
      <li><a [class.active]="filter === 'false'" [routerLink]="['/tasks', {completed: false}]">Active</a></li>
      <li><a [class.active]="filter === 'true'" [routerLink]="['/tasks', {completed: true}]">Completed</a></li>
    </ul>

    <div class="task-list">
      <app-task-item
        *ngFor="let task of tasks | async"
        [task]="task"
        (remove)="remove.emit(task)"
        (update)="update.emit({task: task, changes: $event})"></app-task-item>
    </div>
  `
})

export class TaskListComponent {
  @Input() filter: string;
  @Input() tasks: FirebaseListObservable<ITask[]>;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}
