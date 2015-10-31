import { Component, OnDestroy, View } from 'angular2/angular2';
import { CanActivate } from 'angular2/router';
import { List } from 'immutable';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { TaskStore } from 'core/task/task-store';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';


@Component({
  selector: 'tasks'
})

@View({
  directives: [
    TaskForm,
    TaskList
  ],
  templateUrl: 'components/tasks/tasks.html'
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class Tasks implements OnDestroy {
  tasks: List<any>;
  private subscription: any; // RxJS `Subscription`

  constructor(store: TaskStore) {
    store.ready.then(() => {
      this.tasks = store.list;

      this.subscription = store.subscribe((list: List<any>) => {
        this.tasks = list;
      });
    });
  }

  onDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
