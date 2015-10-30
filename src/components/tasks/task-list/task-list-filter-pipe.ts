import { Pipe, PipeTransform } from 'angular2/angular2';
import { ITask } from 'core/task/task';


@Pipe({
  name: 'filterTasks',
  pure: false
})

export class TaskListFilterPipe implements PipeTransform {
  transform(list: ITask[], args?: string[]): ITask[] {
    if (!args || !args.length) {
      return list;
    }

    switch (args[0]) {
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
