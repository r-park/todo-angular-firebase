import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';


@Component({
  styleUrls: ['./sign-in.scss'],
  template: `
    <div class="g-row sign-in">
      <div class="g-col">
        <h1 class="sign-in__heading">Sign in</h1>
        <button class="sign-in__button" (click)="signInAnonymously()" type="button">Anonymously</button>
        <button class="sign-in__button" (click)="signInWithGithub()" type="button">GitHub</button>
        <button class="sign-in__button" (click)="signInWithGoogle()" type="button">Google</button>
        <button class="sign-in__button" (click)="signInWithTwitter()" type="button">Twitter</button>
        <button class="sign-in__button" (click)="signInWithFacebook()" type="button">Facebook</button>
      </div>
    </div>
  `
})

export class SignInComponent {
  constructor(private auth: AuthService, private router: Router) {}

  signInAnonymously(): void {
    this.auth.signInAnonymously()
      .then(() => this.postSignIn());
  }

  signInWithGithub(): void {
    this.auth.signInWithGithub()
      .then(() => this.postSignIn());
  }

  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn());
  }

  signInWithTwitter(): void {
    this.auth.signInWithTwitter()
      .then(() => this.postSignIn());
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn());
  }

  private postSignIn(): void {
    this.router.navigate(['/tasks']);
  }
}
