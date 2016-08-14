import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// AppModule
import { AppModule } from './app';

// common styles
import './common/styles.scss';


if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule);
