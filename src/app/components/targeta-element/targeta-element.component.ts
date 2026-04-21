import { Component, Input } from '@angular/core';
import { ElementCataleg } from '../../models/element.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  templateUrl: './targeta-element.component.html',
  styleUrls: ['./targeta-element.component.scss'],
  imports: [CommonModule]
})
export class TargetaElementComponent {
  @Input({ required: true }) element!: ElementCataleg;
}
