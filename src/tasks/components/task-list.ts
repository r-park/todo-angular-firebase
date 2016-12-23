import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2';
import { ITask } from '../models/task';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-list',
  styles: [
    require('./task-list.scss')
  ],
  template: require('./task-list.html')
})

export class TaskListComponent {
  @Input() filter: string;
  @Input() tasks: FirebaseListObservable<ITask[]>;

  @Output() remove = new EventEmitter(false);
  @Output() update = new EventEmitter(false);
}
