import { Component, Input,ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { ElementCataleg } from '../../models/element.model';
changeDetection: ChangeDetectionStrategy.OnPush

@Component({
  selector: 'app-llista-elements',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent, ScrollingModule],
  templateUrl: './llista-elements.component.html',
  styleUrl: './llista-elements.component.scss'
})
export class LlistaElementsComponent {
  @Input({ required: true }) elements: ElementCataleg[] = [];

  altadaElement = 220;
}
