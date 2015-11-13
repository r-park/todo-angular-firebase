import { Component, FORM_DIRECTIVES, View } from 'angular2/angular2';
import { TaskService } from '../../../core/task/task-service';


@Component({
  selector: 'task-form'
})

@View({
  directives: [
    FORM_DIRECTIVES
  ],
  styleUrls: ['components/tasks/task-form/task-form.css'],
  templateUrl: 'components/tasks/task-form/task-form.html'
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
