import { Injectable } from 'angular2/core';
import { Router } from 'angular2/router';
import { AuthService } from './auth-service';

/**
 * This is an ugly workaround until `CanActivate` supports DI
 * @see https://github.com/angular/angular/issues/4112
 */

@Injectable()
export class AuthRouteHelper {
  static auth: AuthService;
  static router: Router;

  static requireAuth(): boolean {
    const { auth, router } = AuthRouteHelper;
    if (!auth.authenticated) router.navigate(['/SignIn']);
    return auth.authenticated;
  }

  static requireUnauth(): boolean {
    const { auth, router } = AuthRouteHelper;
    if (auth.authenticated) router.navigate(['/Tasks']);
    return !auth.authenticated;
  }

  constructor(auth: AuthService, router: Router) {
    AuthRouteHelper.auth = auth;
    AuthRouteHelper.router = router;
  }
}
