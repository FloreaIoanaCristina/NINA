import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'category-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule], 
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  categories: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any>('assets/data/auction-categories.json')
      .subscribe(data => {
    this.categories = data.categories;
  });
  }

  goToAuctions(category: string): void {
    this.router.navigate(['/auctions'], { queryParams: { category } });
  }
}