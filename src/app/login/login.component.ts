import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private apiService: ApiService, private router: Router) { }



  login(): void {
    this.errorMessage = '';
    this.apiService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        sessionStorage.setItem('token', response.token); // Зберігаємо токен в sessionStorage
        this.apiService.setAuthStatus(true);
        this.router.navigate(['/home'])
      },
      error: (error: any) => {
        sessionStorage.removeItem('token'); // Видаляємо токен з sessionStorage у разі помилки
        this.apiService.setAuthStatus(false);
        this.errorMessage = 'Incorrect user name or password';
      }
    });
  }
}
