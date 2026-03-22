import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  templateUrl: './barra-cerca.component.html'
})
export class BarraCercaComponent {
  @Output() onSearch = new EventEmitter<string>();

  handleInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.onSearch.emit(inputValue);
  }
}
