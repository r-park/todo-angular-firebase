import { Component } from '@angular/core';
import { AuthService } from '../../auth';


@Component({
  selector: 'app',
  styles: [
    require('./app.scss')
  ],
  template: `
    <app-header
      [authenticated]="auth.authenticated$ | async"
      (signOut)="signOut()"></app-header>

    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `
})

export class AppComponent {
  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
  }
}
