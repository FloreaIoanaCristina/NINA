import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  loginError = '';
  loginSuccess = false;

  constructor(private router: Router) {}

  // Utilizatori mock
  users = [
    { email: 'test1@email.com', password: 'parola123' },
    { email: 'demo@email.com', password: 'demo1234' },
    { email: 'andrei@email.com', password: 'andrei2024' }
  ];

  onLogin(event: Event) {
    event.preventDefault();
    const found = this.users.find(
      user => user.email === this.email && user.password === this.password
    );
    if (found) {
      this.loginSuccess = true;
      this.loginError = '';
      this.router.navigate(['/']);
    } else {
      this.loginError = 'Email sau parolă incorecte!';
      this.loginSuccess = false;
    }
  }
}
