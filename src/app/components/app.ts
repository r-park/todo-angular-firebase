import { Component } from '@angular/core';
import { AuthService } from 'src/auth';


@Component({
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

export class AppComponent {
  constructor(private auth: AuthService) {}

  signOut(): void {
    this.auth.signOut();
  }
}
