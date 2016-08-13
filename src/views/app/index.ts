import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AUTH_PROVIDERS } from 'src/core/auth';
import { FirebaseModule } from 'src/core/firebase';
import { SignInModule } from '../sign-in';
import { TasksModule } from '../tasks';
import { App } from './app';
import { AppHeader } from './app-header';


@NgModule({
  bootstrap: [
    App
  ],
  declarations: [
    App,
    AppHeader
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    FirebaseModule,
    SignInModule,
    TasksModule
  ],
  providers: [
    AUTH_PROVIDERS
  ]
})

export class AppModule {}
