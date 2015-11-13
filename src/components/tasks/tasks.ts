import { Component, View } from 'angular2/angular2';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from '../../core/auth/auth-route-helper';
import { TaskStore } from '../../core/task/task-store';
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

export class Tasks {
  constructor(public taskStore: TaskStore) {}
}
