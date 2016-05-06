import { ReflectiveInjector } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AuthService } from './auth-service';


let appInjector: ReflectiveInjector;

/**
 * This is a workaround until `CanActivate` supports DI
 * @see https://github.com/angular/angular/issues/4112
 */

export class AuthRouteHelper {
  static dependencies(): {auth: AuthService, router: Router} {
    const injector: ReflectiveInjector = AuthRouteHelper.injector();
    const auth: AuthService = injector.get(AuthService);
    const router: Router = injector.get(Router);
    return {auth, router};
  }

  static injector(injector?: ReflectiveInjector): ReflectiveInjector {
    if (injector) appInjector = injector;
    return appInjector;
  }

  static requireAuth(): boolean {
    const { auth, router } = AuthRouteHelper.dependencies();
    if (!auth.authenticated) router.navigate(['/SignIn']);
    return auth.authenticated;
  }

  static requireUnauth(): boolean {
    const { auth, router } = AuthRouteHelper.dependencies();
    if (auth.authenticated) router.navigate(['/Tasks']);
    return !auth.authenticated;
  }
}
