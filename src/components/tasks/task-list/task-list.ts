import {
  Component,
  Input,
  NgFor,
  View
} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { ReplaySubject } from '@reactivex/rxjs/dist/cjs/Rx';
import { TaskItem } from '../task-item/task-item';
import { TaskListFilterPipe } from './task-list-filter-pipe';


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
  styleUrls: ['components/tasks/task-list/task-list.css'],
  templateUrl: 'components/tasks/task-list/task-list.html'
})

export class TaskList {
  @Input() tasks: ReplaySubject;

  filter: string;

  constructor(params: RouteParams) {
    this.filter = params.get('filter');
  }
}
