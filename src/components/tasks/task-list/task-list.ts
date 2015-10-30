import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgFor,
  OnDestroy,
  View
} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { ITask } from 'core/task/task';
import { TaskStore } from 'core/task/task-store';
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

export class TaskList implements OnDestroy {
  filter: string;
  tasks: ITask[];
  private store: TaskStore;
  private subscriber: any;

  constructor(params: RouteParams, cdRef: ChangeDetectorRef, store: TaskStore) {
    this.filter = params.get('filter');
    this.store = store;

    store.ready.then(() => {
      this.tasks = this.store.tasks;
      cdRef.markForCheck();
      this.subscriber = store.subscribe({
        next: (): void => cdRef.markForCheck()
      });
    });
  }

  onDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }
}
