import { Component, FORM_DIRECTIVES, View } from 'angular2/angular2';
import { TaskService } from '../../../core/task/task-service';

const styles = require('!raw!autoprefixer!sass!./task-form.scss');
const template = require('./task-form.html');


@Component({
  selector: 'task-form'
})

@View({
  directives: [
    FORM_DIRECTIVES
  ],
  styles: [styles],
  template
})

export class TaskForm {
  title: string = '';

  constructor(private taskService: TaskService) {}

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title = this.title.trim();
    if (title.length) {
      this.taskService.createTask(title);
    }
    this.clear();
  }
}
