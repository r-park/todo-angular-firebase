import { Component, NgFor, NgZone, View } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { ITask } from 'app/core/task/task';
import { TaskStore } from 'app/core/task/task-store';
import { TaskItem } from '../task-item/task-item';


@Component({
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


export class TaskList {
  filter: string;
  private store: TaskStore;
  private zone: NgZone;

  constructor(params: RouteParams, store: TaskStore, zone: NgZone) {
    this.filter = params.get('filter');
    this.store = store;
    this.zone = zone;

    store.emitter.observer({
      next: (): void => zone.run(() => {})
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
}
