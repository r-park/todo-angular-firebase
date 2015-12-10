import { provide } from 'angular2/angular2';
import { FIREBASE_URL } from '../../config';
import { AuthRouteHelper } from './auth-route-helper';
import { AuthService } from './auth-service';


export const AUTH_PROVIDERS: any[] = [
  AuthRouteHelper,

  provide(AuthService, {
    useFactory: (): AuthService => {
      return new AuthService(new Firebase(FIREBASE_URL));
    }
  })
];
