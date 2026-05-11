import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../serveis/element.service';
import { LlistaElementsComponent } from '../../components/llista-elements/llista-elements.component';

@Component({
  selector: 'app-cataleg',
  standalone: true,
  imports: [CommonModule, LlistaElementsComponent],
  templateUrl: './cataleg.component.html',
  styleUrl: './cataleg.component.scss'
})
export class CatalegComponent implements OnInit {
  public elementService = inject(ElementService);

  ngOnInit(): void {
    this.elementService.obtenirTots();
  }
}
