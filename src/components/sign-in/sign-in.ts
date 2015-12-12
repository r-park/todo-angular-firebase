import { Component, View } from 'angular2/core';
import { CanActivate, Router } from 'angular2/router';
import { AuthRouteHelper } from '../../core/auth/auth-route-helper';
import { AuthService } from '../../core/auth/auth-service';

const styles = require('!raw!autoprefixer!sass!./sign-in.scss');
const template = require('./sign-in.html');


@Component({
  selector: 'sign-in'
})

@View({
  styles: [styles],
  template
})

@CanActivate(() => AuthRouteHelper.requireUnauth())

export class SignIn {
  constructor(private auth: AuthService, private router: Router) {}

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

  private postSignIn(): void {
    this.router.navigate(['/Tasks']);
  }
}
