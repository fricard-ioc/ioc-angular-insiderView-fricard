import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementApiResponse, ElementCataleg } from '../models/element.model';
import { adaptarElementsApi } from '../adaptadors/element.adaptador';
import { finalize } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  private _elements = signal<ElementCataleg[]>([]);
  private _carregant = signal<boolean>(false);
  private _error = signal<string | null>(null); 

  public elements = this._elements.asReadonly();
  public carregant = this._carregant.asReadonly();
  public error = this._error.asReadonly();

  obtenerPopulars(): void {
    this.prepareRequest();

    this.http.get<ElementApiResponse[]>(`${this.apiUrl}?popular=true`)
      .pipe(finalize(() => this._carregant.set(false)))
      .subscribe({
        next: (data) => {
          this._elements.set(adaptarElementsApi(data));
          this._error.set(null);
        },
        error: () => this._error.set('Error en carregar els elements populars. Reintenta-ho.')
      });
  }

  cercar(terme: string): void {
    if (!terme.trim()) {
      this.obtenerPopulars();
      return;
    }

    this.prepareRequest();

    this.http.get<ElementApiResponse[]>(`${this.apiUrl}?nom_like=${terme}`)
      .pipe(finalize(() => this._carregant.set(false)))
      .subscribe({
        next: (data) => {
          this._elements.set(adaptarElementsApi(data));
          this._error.set(null);
        },
        error: () => this._error.set(`No s'ha pogut realitzar la cerca de "${terme}".`)
      });
  }

  private prepareRequest(): void {
    this._carregant.set(true);
    this._error.set(null);
  }
}
