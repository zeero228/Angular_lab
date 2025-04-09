import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LoginComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.apiService.authStatus$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }
}
