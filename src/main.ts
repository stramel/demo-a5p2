import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { webcomponentsReady } from '@codebakery/origami';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

webcomponentsReady().then(() => {
  return platformBrowserDynamic().bootstrapModule(AppModule, {
    enableLegacyTemplate: false,
  });
}, (error) => {
  // No WebComponent support and webcomponentsjs is not loaded
  console.error(error);
}).catch(err => console.log(err));
