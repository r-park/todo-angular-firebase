import { Component, View } from 'angular2/angular2';
import { RouteConfig } from 'angular2/router';
import { AuthRouterOutlet } from 'app/core/auth/auth-router-outlet';
import { Tasks } from '../tasks/tasks';


@Component({
  selector: 'app'
})

@View({
  directives: [
    AuthRouterOutlet
  ],
  styleUrls: ['app/components/app/app.css'],
  templateUrl: 'app/components/app/app.html'
})

@RouteConfig([
  { path: '/', redirectTo: '/tasks' },
  { path: '/tasks', component: Tasks, as: 'Tasks' }
])

export class App {}
