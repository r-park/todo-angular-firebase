import { bootstrap, FORM_PROVIDERS, provide } from 'angular2/angular2';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';
import { AUTH_PROVIDERS } from 'app/core/auth/bindings';
import { FIREBASE_PROVIDERS } from 'app/core/firebase/bindings';
import { TASK_PROVIDERS } from 'app/core/task/bindings';
import { App } from 'app/components/app/app';


bootstrap(App, [
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, {useValue: location.pathname}),
  FORM_PROVIDERS,
  AUTH_PROVIDERS,
  FIREBASE_PROVIDERS,
  TASK_PROVIDERS
]).catch((err: Error) => console.error(err));
