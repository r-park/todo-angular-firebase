import { Component, View } from 'angular2/core';
import { CanActivate } from 'angular2/router';
import { AuthRouteHelper } from '../../core/auth/auth-route-helper';
import { TaskStore } from '../../core/task/task-store';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';

const template = require('./tasks.html');


@Component({
  selector: 'tasks'
})

@View({
  directives: [
    TaskForm,
    TaskList
  ],
  template
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class Tasks {
  constructor(public taskStore: TaskStore) {}
}
