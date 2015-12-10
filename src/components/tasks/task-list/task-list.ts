import { Component, Input, NgFor, View } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { List } from 'immutable';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';

const styles = require('!raw!autoprefixer!sass!./task-list.scss');
const template = require('./task-list.html');


@Component({
  selector: 'task-list'
})

@View({
  directives: [
    NgFor,
    RouterLink,
    TaskItem
  ],
  pipes: [
    TaskListFilterPipe
  ],
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
