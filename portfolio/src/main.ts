import { AppComponent } from './app/app.component';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideAnimations()

  ]

})
