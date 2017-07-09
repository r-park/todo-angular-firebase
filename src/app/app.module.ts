import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header.component';

// modules
import { AuthModule } from './auth';
import { FirebaseModule } from './firebase';
import { TasksModule } from './tasks';


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),

    AuthModule,
    FirebaseModule,
    TasksModule
  ]
})
export class AppModule { }
