import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// components
import { TasksComponent } from './components/tasks';

// guards
import { RequireAuthGuard } from '../auth';


export const TasksRoutesModule: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [RequireAuthGuard]
  }
]);
