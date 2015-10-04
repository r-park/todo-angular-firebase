import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  NgFor,
  NgZone,
  OnDestroy,
  View,
  ViewEncapsulation
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
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['app/components/tasks/task-list/task-list.css'],
  templateUrl: 'app/components/tasks/task-list/task-list.html'
})


export class TaskList implements OnDestroy {
  filter: string;
  private store: TaskStore;
  private subscriber: any;

  constructor(params: RouteParams, @Inject(ChangeDetectorRef) cdRef: ChangeDetectorRef, store: TaskStore, zone: NgZone) {
    this.filter = params.get('filter');
    this.store = store;

    store.ready.then(() => {
      console.log('TaskStore READY');
      cdRef.markForCheck();
      zone.run(() => true);

      this.subscriber = store.subscribe({
        next: (): void => {
          console.log('TaskStore CHANGED');
          cdRef.markForCheck()
        }
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
