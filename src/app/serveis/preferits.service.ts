import { Injectable, signal, computed } from '@angular/core';
import { ElementCataleg } from '../models/element.model';

@Injectable({
  providedIn: 'root'
})
export class PreferitsService {
  private readonly clauStorage = 'preferits-cataleg';
  private _preferits = signal<ElementCataleg[]>(this.carregarDeStorage());
  public preferits = this._preferits.asReadonly();
  public totalPreferits = computed(() => this._preferits().length);

  private carregarDeStorage(): ElementCataleg[] {
    try {
      const dades = localStorage.getItem(this.clauStorage); 
      return dades ? JSON.parse(dades) : [];
    } catch (error) {
      return [];
    }
  }

  private guardarPreferitsLocalStoarge(preferits: ElementCataleg[]): void {
    try {
      localStorage.setItem(this.clauStorage, JSON.stringify(preferits));
    } catch (error) {
    }
  }

  afegirPreferit(element: ElementCataleg): void {
    if (!this.esPreferit(element.id)) {
      const nousPreferits = [...this._preferits(), element];
      this._preferits.set(nousPreferits)
      this.guardarPreferitsLocalStoarge(nousPreferits);
    }
  }

  eliminarPreferit(id: string): void {
    const nousPreferits = this._preferits().filter(e => e.id !== id);
    this._preferits.set(nousPreferits);
    this.guardarPreferitsLocalStoarge(nousPreferits);
  }

  esPreferit(id: string) {
    return this._preferits().some(e => e.id === id);
  }

}
