import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  templateUrl: './targeta-element.component.html',
  styleUrls: ['./targeta-element.component.scss'],
  imports: [CommonModule]
})
export class TargetaElementComponent {
  @Input({ required: true }) element!: ElementCataleg;

  public preferitsService = inject(PreferitsService);

  togglePreferit() {
    if (this.preferitsService.esPreferit(this.element.id)) {
      this.preferitsService.eliminarPreferit(this.element.id);
    } else {
      this.preferitsService.afegirPreferit(this.element);
    }
  }
}
