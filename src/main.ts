import { ComponentRef, enableProdMode, provide } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';

// core
import { AUTH_PROVIDERS, AuthRouteHelper } from './core/auth';
import { FIREBASE_APP_PROVIDERS } from './core/firebase';
import { TASK_PROVIDERS } from './core/task';

// root component
import { App } from './views/app';

// common styles
import './views/common/styles.scss';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


const providers: any[] = [
  AUTH_PROVIDERS,
  FIREBASE_APP_PROVIDERS,
  ROUTER_PROVIDERS,
  TASK_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: '/'})
];


bootstrap(App, providers)
  .then((appRef: ComponentRef) => AuthRouteHelper.injector(appRef.injector))
  .catch((error: Error) => console.error(error));
