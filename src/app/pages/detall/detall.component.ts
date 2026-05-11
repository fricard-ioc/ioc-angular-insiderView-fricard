import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../serveis/element.service';
import { ElementCataleg } from '../../models/element.model';
import { adaptarElementsApi } from '../../adaptadors/element.adaptador';
import { TargetaElementComponent } from '../../components/targeta-element/targeta-element.component';

@Component({
  selector: 'app-detall',
  standalone: true,
  imports: [CommonModule, RouterLink, TargetaElementComponent],
  templateUrl: './detall.component.html',
  styleUrl: './detall.component.scss'
})
export class DetallComponent implements OnInit {
  id: string | null = null;
  element: ElementCataleg | null = null;
  carregant = true;
  error = false;

  private route = inject(ActivatedRoute);
  private elementService = inject(ElementService);

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.elementService.obtenirPerId(this.id).subscribe({
        next: (data) => {
          this.element = adaptarElementsApi([data])[0];
          this.carregant = false;
        },
        error: () => {
          this.error = true;
          this.carregant = false;
        }
      });
    }
  }
}
