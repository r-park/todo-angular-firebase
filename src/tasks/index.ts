import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth';

import { TaskFormComponent } from './components/task-form';
import { TaskItemComponent } from './components/task-item';
import { TaskListComponent } from './components/task-list';
import { TasksComponent } from './components/tasks';
import { AutoFocusDirective } from './directives/autofocus-directive';
import { TaskService } from './services/task-service';


const routes: Routes = [
  {path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AutoFocusDirective,
    TaskFormComponent,
    TaskItemComponent,
    TaskListComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    TaskService
  ]
})

export class TasksModule {}

export { TaskService };
