import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../serveis/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  contrasenya = '';
  errorVisible = false;

  private authService = inject(AuthService);
  private router = inject(Router);

  onLogin() {
    const success = this.authService.login(this.email, this.contrasenya);
    if (success) {
      this.errorVisible = false;
      this.router.navigate(['/preferits']);
    } else {
      this.errorVisible = true;
    }
  }
}
