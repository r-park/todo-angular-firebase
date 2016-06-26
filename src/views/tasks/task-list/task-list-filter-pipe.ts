import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from 'src/core/tasks';


@Pipe({
  name: 'filterTasks',
  pure: true
})

export class TaskListFilterPipe implements PipeTransform {
  transform(list: ITask[], filterType?: string): ITask[] {
    if (!list || !filterType) {
      return list;
    }

    switch (filterType) {
      case 'active':
        return list.filter((task: ITask) => {
          return !task.completed;
        });

      case 'completed':
        return list.filter((task: ITask) => {
          return task.completed;
        });

      default:
        return list;
    }
  }
}
