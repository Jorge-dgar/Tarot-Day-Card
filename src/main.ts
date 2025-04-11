import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { TarotCardComponent } from './app/tarot-card/tarot-card.component';

// Arrancar la aplicación usando bootstrapApplication
bootstrapApplication(AppComponent).catch(err => console.error(err));
