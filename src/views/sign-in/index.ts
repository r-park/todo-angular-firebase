import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnauthGuard } from 'src/core/auth';
import { SignIn } from './sign-in';


const routes: Routes = [
  {path: '', component: SignIn, canActivate: [UnauthGuard]}
];


@NgModule({
  declarations: [
    SignIn
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class SignInModule {}
