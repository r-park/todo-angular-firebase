import { Component, View } from 'angular2/angular2';
import { RouteConfig } from 'angular2/router';
import { AuthRouterOutlet } from 'core/auth/auth-router-outlet';
import { Tasks } from '../tasks/tasks';


@Component({
  selector: 'app'
})

@View({
  directives: [
    AuthRouterOutlet
  ],
  styleUrls: ['components/app/app.css'],
  templateUrl: 'components/app/app.html'
})

@RouteConfig([
  { path: '/', redirectTo: '/tasks' },
  { path: '/tasks', component: Tasks, as: 'Tasks' }
])

export class App {}
