import { Component } from 'angular2/core';
import { TaskService } from 'core/task/task-service';

const styles: string = require('./task-form.scss');
const template: string = require('./task-form.html');


@Component({
  selector: 'task-form',
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
    const title: string = this.title.trim();
    if (title.length) {
      this.taskService.createTask(title);
    }
    this.clear();
  }
}
