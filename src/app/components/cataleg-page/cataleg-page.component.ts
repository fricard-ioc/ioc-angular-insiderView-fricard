import { Component, Injectable, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LlistaElementsComponent } from '../../components/llista-elements/llista-elements.component';
import { ElementService } from '../../serveis/element.service';

@Injectable()
@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, LlistaElementsComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent implements OnInit {
  public elementService = inject(ElementService);

  ngOnInit(): void {
    this.elementService.obtenerPopulars();
  }

  reintentar(): void {
    this.elementService.obtenerPopulars();
  }
}
