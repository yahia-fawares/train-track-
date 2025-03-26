import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';  // ✅ Import HttpClient provider
import { provideToastr } from 'ngx-toastr';
import { routes } from './app.routes';
import { AuthService } from './Services/auth.service'; 
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),  // ✅ Add this line to enable HttpClient
    AuthService,
    provideToastr(),
    provideAnimations(),
   
  ],
};

