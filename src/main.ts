import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { bootstrap } from '@angular/platform-browser-dynamic';

// core
import { AUTH_PROVIDERS } from './core/auth';
import { FIREBASE_APP_PROVIDERS } from './core/firebase';
import { TASKS_PROVIDERS } from './core/tasks';

// routes
import { ROUTER_PROVIDERS } from './views/routes';

// root component
import { App } from './views/app';

// common styles
import './views/common/styles.scss';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


bootstrap(App, [
  disableDeprecatedForms(),
  provideForms(),
  AUTH_PROVIDERS,
  FIREBASE_APP_PROVIDERS,
  ROUTER_PROVIDERS,
  TASKS_PROVIDERS
]).catch((error: Error) => console.error(error));
