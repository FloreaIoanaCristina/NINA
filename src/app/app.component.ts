import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nina-licitatii';

  constructor(public router: Router) {}

  isAuthRoute(): boolean {
    return this.router.url === '/login' || this.router.url === '/signup';
  }
}
