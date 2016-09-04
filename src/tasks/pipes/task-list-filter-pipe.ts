import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../models/task';


@Pipe({
  name: 'filterTasks',
  pure: true
})

export class TaskListFilterPipe implements PipeTransform {
  transform(list: Task[], filterType: string): Task[] {
    if (!list) return [];

    switch (filterType) {
      case 'false':
        return list.filter((task: Task) => {
          return !task.completed;
        });

      case 'true':
        return list.filter((task: Task) => {
          return task.completed;
        });

      default:
        return list;
    }
  }
}
