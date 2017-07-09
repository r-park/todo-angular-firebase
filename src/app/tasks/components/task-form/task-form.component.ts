import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-task-form',
  styleUrls: ['./task-form.component.scss'],
  template: `
    <form class="task-form" (ngSubmit)="submit()" novalidate>
      <input
        [(ngModel)]="title"
        (keyup.escape)="clear()"
        autocomplete="off"
        autofocus
        class="task-form__input"
        name="title"
        placeholder="What needs to be done?"
        required
        type="text">
    </form>
  `
})

export class TaskFormComponent {
  @Output() createTask = new EventEmitter(false);

  title = '';

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
