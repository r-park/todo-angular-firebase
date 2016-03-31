import { ChangeDetectionStrategy, Component, EventEmitter, Output } from 'angular2/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'task-form',
  styles: [
    require('./task-form.scss')
  ],
  template: `
    <form class="task-form" (ngSubmit)="submit()" novalidate>
      <input
        (keyup.escape)="clear()"
        ngControl="title"
        [(ngModel)]="title"
        autocomplete="off"
        autofocus
        class="task-form__input"
        placeholder="What needs to be done?"
        required
        type="text">
    </form>
  `
})

export class TaskForm {
  @Output() createTask: EventEmitter<string> = new EventEmitter(false);

  title: string = '';

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.createTask.emit(title);
    }
    this.clear();
  }
}
