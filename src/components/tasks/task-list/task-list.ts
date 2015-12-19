import { ChangeDetectionStrategy, Component, Input } from 'angular2/core';
import { RouterLink, RouteParams } from 'angular2/router';
import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';

const styles: string = require('./task-list.scss');
const template: string = require('./task-list.html');


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
  styles: [styles],
  template
})

export class TaskList {
  @Input() tasks: ReplaySubject<List<any>>;

  filter: string;

  constructor(params: RouteParams) {
    this.filter = params.get('filter');
  }
}
