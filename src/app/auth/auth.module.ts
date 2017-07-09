import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { SignInComponent } from './components/sign-in';

// modules
import { AuthRoutesModule } from './auth.routes';

// services
import { RequireAuthGuard, RequireUnauthGuard } from './guards';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    AuthRoutesModule
  ],
  providers: [
    AuthService,
    RequireAuthGuard,
    RequireUnauthGuard
  ]
})
export class AuthModule { }
