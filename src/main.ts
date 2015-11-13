import { bootstrap, provide } from 'angular2/angular2';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';
import Firebase from 'firebase';
import { AUTH_PROVIDERS } from './core/auth/providers';
import { TASK_PROVIDERS } from './core/task/providers';
import { App } from './components/app/app';


Firebase.INTERNAL.forceWebSockets();


bootstrap(App, [
  provide(APP_BASE_HREF, {useValue: '/'}),
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  TASK_PROVIDERS
]).catch((error: Error) => console.error(error));
