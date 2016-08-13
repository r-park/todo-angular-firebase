import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/core/auth';
import { TASKS_PROVIDERS } from 'src/core/tasks';
import { AutoFocus } from '../common';
import { TaskForm } from './task-form/task-form';
import { TaskItem } from './task-item/task-item';
import { TaskList } from './task-list/task-list';
import { Tasks } from './tasks';


const routes: Routes = [
  {path: 'tasks', component: Tasks, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AutoFocus,
    TaskForm,
    TaskItem,
    TaskList,
    Tasks
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: TASKS_PROVIDERS
})

export class TasksModule {}
