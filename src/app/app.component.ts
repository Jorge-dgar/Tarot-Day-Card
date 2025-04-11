import { Component } from '@angular/core';
import { TarotCardComponent } from "./tarot-card/tarot-card.component";

@Component({
  selector: 'app-root',
  imports: [ TarotCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
})
export class AppComponent {
  title = 'tarot';
}
