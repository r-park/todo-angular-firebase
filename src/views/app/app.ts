import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { AuthService } from '../../core/auth';
import { SignIn } from '../../views/sign-in';
import { Tasks } from '../../views/tasks';
import { AppHeader } from './app-header';


@RouteConfig([
  {path: '/', component: SignIn, as: 'SignIn'},
  {path: '/tasks', component: Tasks, as: 'Tasks'}
])

@Component({
  directives: [
    AppHeader,
    RouterOutlet
  ],
  selector: 'app',
  styles: [
    require('./app.scss')
  ],
  template: `
    <app-header
      [authenticated]="auth.authenticated"
      (signOut)="signOut()"></app-header>
    
    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `
})

export class App {
  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
