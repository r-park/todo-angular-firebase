import { Component, NgIf, View } from 'angular2/angular2';
import { RouteConfig, RouterOutlet } from 'angular2/router';
import { AuthRouteHelper } from 'core/auth/auth-route-helper';
import { AuthService } from 'core/auth/auth-service';
import { SignIn } from 'components/sign-in/sign-in';
import { Tasks } from 'components/tasks/tasks';


@Component({
  selector: 'app'
})

@View({
  directives: [
    NgIf,
    RouterOutlet
  ],
  styleUrls: ['components/app/app.css'],
  templateUrl: 'components/app/app.html'
})

@RouteConfig([
  {path: '/', component: SignIn, as: 'SignIn'},
  {path: '/tasks', component: Tasks, as: 'Tasks'}
])

export class App {
  authenticated: boolean = false;

  constructor(private auth: AuthService, routerHelper: AuthRouteHelper) {
    auth.subscribe((authenticated: boolean) => {
      this.authenticated = authenticated;
    });
  }

  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
