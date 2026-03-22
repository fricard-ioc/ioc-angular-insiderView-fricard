import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element.model';
import { ELEMENTS_MOCK } from '../../mocks/dades-mock';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { BarraCercaComponent } from '../barra-cerca/barra-cerca.component';

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, BarraCercaComponent],
  templateUrl: './llista-elements.component.html'
})
export class LlistaElementsComponent {
  elements: Element[] = ELEMENTS_MOCK;
  filteredElements: Element[] = [...this.elements];

  filterList(searchTerm: string): void {
    this.filteredElements = this.elements.filter(el =>
      el.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      el.ticker.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  trackById(index: number, element: Element): string {
    return element.id;
  }

}
