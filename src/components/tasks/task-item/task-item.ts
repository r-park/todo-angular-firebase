import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { Component, Input, View } from 'angular2/core';
import { ITask } from '../../../modules/task/task';
import { TaskService } from '../../../modules/task/task-service';
import { Autofocus } from '../../../directives/autofocus-directive';

const styles: string = require('./task-item.scss');
const template: string = require('./task-item.html');


@Component({
  selector: 'task-item'
})

@View({
  directives: [
    Autofocus,
    CORE_DIRECTIVES,
    FORM_DIRECTIVES
  ],
  styles: [styles],
  template
})

export class TaskItem {
  @Input() model: ITask;

  editing: boolean = false;
  title: string = '';

  constructor(private taskService: TaskService) {}

  delete(): void {
    this.taskService.deleteTask(this.model);
  }

  editTitle(): void {
    this.editing = true;
    this.title = this.model.title;
  }

  saveTitle(): void {
    if (this.editing) {
      const title: string = this.title.trim();
      if (title.length && title !== this.model.title) {
        this.taskService.updateTask(this.model, {title});
      }
      this.stopEditing();
    }
  }

  stopEditing(): void {
    this.editing = false;
  }

  toggleStatus(): void {
    this.taskService.updateTask(this.model, {
      completed: !this.model.completed
    });
  }
}
