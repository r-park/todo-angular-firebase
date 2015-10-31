import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgFor,
  View
} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { List } from 'immutable';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  styleUrls: ['components/tasks/task-list/task-list.css'],
  templateUrl: 'components/tasks/task-list/task-list.html'
})

export class TaskList {
  @Input() tasks: List<any>;

  filter: string;

  constructor(params: RouteParams) {
    this.filter = params.get('filter');
  }
}
