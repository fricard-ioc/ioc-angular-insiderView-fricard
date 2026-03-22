import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  @Output() onSearch = new EventEmitter<string>();

  textCerca = '';

  /*  handleInput(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.onSearch.emit(inputValue);
    */

  cercar(): void {
    if (this.textCerca.length >= 3) {
      this.onSearch.emit(this.textCerca);
    }
  }

  netejar(): void {
    this.textCerca = '';
    this.onSearch.emit('');
  }
}
