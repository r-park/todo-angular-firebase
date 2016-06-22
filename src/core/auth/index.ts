import { AuthGuard } from './auth-guard';
import { AuthService } from './auth-service';
import { UnauthGuard } from './unauth-guard';


export { AuthGuard };
export { AuthService };
export { UnauthGuard };


export const AUTH_PROVIDERS: any[] = [
  AuthGuard,
  AuthService,
  UnauthGuard
];
