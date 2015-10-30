import { bootstrap, FORM_PROVIDERS, provide } from 'angular2/angular2';
import { APP_BASE_HREF, ROUTER_PROVIDERS } from 'angular2/router';
import Firebase from 'firebase';
import { AUTH_PROVIDERS } from 'core/auth/bindings';
import { FIREBASE_PROVIDERS } from 'core/firebase/bindings';
import { TASK_PROVIDERS } from 'core/task/bindings';
import { App } from 'components/app/app';


Firebase.INTERNAL.forceWebSockets();


bootstrap(App, [
  provide(APP_BASE_HREF, {useValue: location.pathname}),
  ROUTER_PROVIDERS,
  FORM_PROVIDERS,
  AUTH_PROVIDERS,
  FIREBASE_PROVIDERS,
  TASK_PROVIDERS
]).catch((err: Error) => console.error(err));
