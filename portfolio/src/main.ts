import { AppComponent } from './app/app.component';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideAnimations(),
    provideRouter(routes),
    provideHttpClient()

  ]

})
