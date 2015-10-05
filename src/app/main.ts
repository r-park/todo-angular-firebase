import { bootstrap, FORM_BINDINGS } from 'angular2/angular2';
import { routerBindings } from 'angular2/router';
import { AUTH_BINDINGS } from 'app/core/auth/bindings';
import { FIREBASE_BINDINGS } from 'app/core/firebase/bindings';
import { TASK_BINDINGS } from 'app/core/task/bindings';
import { App } from 'app/components/app/app';


bootstrap(App, [
  routerBindings(App),
  FORM_BINDINGS,
  AUTH_BINDINGS,
  FIREBASE_BINDINGS,
  TASK_BINDINGS
]).catch((err: Error) => console.error(err));
