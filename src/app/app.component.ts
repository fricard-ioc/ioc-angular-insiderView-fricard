import { Component } from '@angular/core';
import { CatalegPageComponent } from './components/cataleg-page/cataleg-page.component';
import { FormulariCercaComponent } from './components/formulari-cerca/formulari-cerca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalegPageComponent, FormulariCercaComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ioc-angular-insiderView-fricard';
}
