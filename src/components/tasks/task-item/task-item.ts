import {
  Component,
  ControlGroup,
  DefaultValueAccessor,
  FormBuilder,
  NgClass,
  NgControlName,
  NgFormModel,
  View
} from 'angular2/angular2';
import { ITask } from 'core/task/task';
import { TaskService } from 'core/task/task-service';
import { FocusDirective } from 'directives/focus-directive';


@Component({
  properties: ['model'],
  selector: 'task-item'
})

@View({
  directives: [
    DefaultValueAccessor,
    FocusDirective,
    NgClass,
    NgControlName,
    NgFormModel
  ],
  styleUrls: ['components/tasks/task-item/task-item.css'],
  templateUrl: 'components/tasks/task-item/task-item.html'
})

export class TaskItem {
  editing: boolean;
  form: ControlGroup;
  model: ITask;
  private taskService: TaskService;

  constructor(formBuilder: FormBuilder, taskService: TaskService) {
    this.editing = false;
    this.form = formBuilder.group({title: ['']});
    this.taskService = taskService;
  }

  delete(): void {
    this.taskService.deleteTask(this.model);
  }

  edit(): void {
    this.editing = true;
    this.form.controls.title.updateValue(this.model.title);
  }

  cancelEdit(): void {
    this.editing = false;
  }

  saveEdit(): void {
    if (this.editing) {
      const value: string = this.form.controls.title.value.trim();
      if (value.length && value !== this.model.title) {
        this.taskService.updateTask(this.model, {title: value});
      }
      this.editing = false;
    }
  }

  toggleStatus(): void {
    this.taskService.updateTask(this.model, {completed: !this.model.completed});
  }
}
