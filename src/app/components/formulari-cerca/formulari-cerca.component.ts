import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule, Validators, AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, timer, of } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ElementService  } from '../../serveis/element.service';

export function codiDisponibleValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null);

    return timer(500).pipe(
      map(() => {
        const text = control.value.toLowerCase();
        if (text === 'error') {
          return { sensResultats: true };
        }
        return null;
      })
    );
  };
}

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrls: ['./formulari-cerca.component.scss']
})
export class FormulariCercaComponent implements OnInit {
  private elementService = inject(ElementService);
  private destroyRef = inject(DestroyRef);

  termeCerca = new FormControl('', {
    validators: [Validators.minLength(2), Validators.maxLength(50)],
    asyncValidators: [codiDisponibleValidator()],
    updateOn: 'change'
  });

  ngOnInit(): void {


    this.termeCerca.valueChanges.pipe(
      debounceTime(400), 
      distinctUntilChanged(),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(valor => {
      if (valor && valor.length >= 2) {
        this.elementService.cercar(valor);
      }
      else if (valor === '') {
        this.elementService.obtenerPopulars();
      }
    });
  }

  netejar(): void {
    this.termeCerca.setValue('');
  }
}
