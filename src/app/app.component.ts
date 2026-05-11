import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { inject } from '@angular/core';
import { PreferitsService } from './serveis/preferits.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public preferitsService = inject(PreferitsService)
  title = 'ioc-angular-insiderView-fricard';
}
