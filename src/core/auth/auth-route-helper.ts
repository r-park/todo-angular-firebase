import { Injectable } from 'angular2/angular2';
import { Router } from 'angular2/router';
import { AuthService } from './auth-service';


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
