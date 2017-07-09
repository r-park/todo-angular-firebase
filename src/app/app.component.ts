import { Component } from '@angular/core';
import { AuthService } from './auth';


@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-header
      [authenticated]="auth.authenticated$ | async"
      (signOut)="auth.signOut()"></app-header>

    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {
  constructor(public auth: AuthService) {}
}
