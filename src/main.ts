import { enableProdMode, provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// root component
import { App } from 'components/app/app';

// modules
import { AUTH_PROVIDERS } from 'modules/auth/providers';
import { TASK_PROVIDERS } from 'modules/task/providers';

// global styles
import './styles/styles.scss';


Firebase.INTERNAL.forceWebSockets();


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


bootstrap(App, [
  ROUTER_PROVIDERS,
  AUTH_PROVIDERS,
  TASK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
]).catch((error: Error) => console.error(error));
