import {
  Attribute,
  Directive,
  DynamicComponentLoader,
  ElementRef
} from 'angular2/angular2';
import { ComponentInstruction, Router, RouterOutlet } from 'angular2/router';
import { AuthService } from './auth-service';


@Directive({
  selector: 'auth-router-outlet'
})

export class AuthRouterOutlet extends RouterOutlet {
  constructor(public _elementRef: ElementRef,
              public _loader: DynamicComponentLoader,
              public _parentRouter: Router,
              @Attribute('name') nameAttr: string,
              private auth: AuthService) {

    super(_elementRef, _loader, _parentRouter, nameAttr);
  }

  activate(instruction: ComponentInstruction): Promise<any> {
    return this.auth.ensureAuth()
      .then(() => super.activate(instruction));
  }
}
