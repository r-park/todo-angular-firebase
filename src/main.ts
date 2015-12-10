import { provide } from 'angular2/angular2';
import { bootstrap } from 'angular2/platform/browser';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';
import { AUTH_PROVIDERS } from './core/auth/providers';
import { TASK_PROVIDERS } from './core/task/providers';
import { App } from './components/app/app';
import 'styles/styles.scss';


Firebase.INTERNAL.forceWebSockets();


bootstrap(App, [
  provide(APP_BASE_HREF, {useValue: '/'}),
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  TASK_PROVIDERS
]).catch((error: Error) => console.error(error));
