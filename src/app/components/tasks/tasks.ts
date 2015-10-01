import { Component, View } from 'angular2/angular2';
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
  templateUrl: 'app/components/tasks/tasks.html'
})


export class Tasks {}
