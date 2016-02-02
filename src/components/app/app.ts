import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { AuthService } from 'core/auth/auth-service';
import { SignIn } from '../sign-in/sign-in';
import { Tasks } from '../tasks/tasks';

const styles: string = require('./app.scss');
const template: string = require('./app.html');


@Component({
  directives: [
    RouterOutlet
  ],
  selector: 'app',
  styles: [styles],
  template
})

@RouteConfig([
  {path: '/', component: SignIn, as: 'SignIn'},
  {path: '/tasks', component: Tasks, as: 'Tasks'}
])

export class App {
  authenticated: boolean = false;

  constructor(private auth: AuthService, routeHelper: AuthRouteHelper) {
    auth.subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
