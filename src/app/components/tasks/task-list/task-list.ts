import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgFor,
  OnDestroy,
  View
} from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { ITask } from 'app/core/task/task';
import { TaskStore } from 'app/core/task/task-store';
import { TaskItem } from '../task-item/task-item';


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
  styleUrls: ['app/components/tasks/task-list/task-list.css'],
  templateUrl: 'app/components/tasks/task-list/task-list.html'
})

export class TaskList implements OnDestroy {
  filter: string;
  private store: TaskStore;
  private subscriber: any;

  constructor(params: RouteParams, cdRef: ChangeDetectorRef, store: TaskStore) {
    this.filter = params.get('filter');
    this.store = store;

    store.ready.then(() => {
      cdRef.markForCheck();
      this.subscriber = store.subscribe({
        next: (): void => cdRef.markForCheck()
      });
    });
  }

  get tasks(): ITask[] {
    if (this.filter === 'active') {
      return this.store.filterActiveTasks();
    }
    else if (this.filter === 'completed') {
      return this.store.filterCompletedTasks();
    }
    return this.store.tasks;
  }

  onDestroy(): void {
    if (this.subscriber) {
      this.subscriber.unsubscribe();
    }
  }
}
