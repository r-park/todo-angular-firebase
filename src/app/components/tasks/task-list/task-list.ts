import { Component, NgFor, View } from 'angular2/angular2';
import { RouterLink, RouteParams } from 'angular2/router';
import { ITask } from 'app/core/task/task';
import { TaskService } from 'app/core/task/task-service';
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
  private taskService: TaskService;

  constructor(params: RouteParams, taskService: TaskService) {
    this.filter = params.get('filter');
    this.taskService = taskService;
  }

  get tasks(): ITask[] {
    if (this.filter === 'active') {
      return this.taskService.filterActiveTasks();
    }
    else if (this.filter === 'completed') {
      return this.taskService.filterCompletedTasks();
    }
    return this.taskService.tasks;
  }
}
