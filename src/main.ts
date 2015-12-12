import { bootstrap } from 'angular2/bootstrap';
import { provide } from 'angular2/core';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// root component
import { App } from './components/app/app';

// modules
import { AUTH_PROVIDERS } from './core/auth/providers';
import { TASK_PROVIDERS } from './core/task/providers';

// global styles
import './styles/styles.scss';


Firebase.INTERNAL.forceWebSockets();


bootstrap(App, [
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  TASK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
