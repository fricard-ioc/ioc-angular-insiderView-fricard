import { Component } from '@angular/core';
import { CatalegPageComponent } from './components/cataleg-page/cataleg-page.component';
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';
import { inject } from '@angular/core';
import { PreferitsService } from './serveis/preferits.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalegPageComponent, FormulariCercaComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public preferitsService = inject(PreferitsService)
  title = 'ioc-angular-insiderView-fricard';
}
