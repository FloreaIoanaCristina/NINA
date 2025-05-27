import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auction-card',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './auction-card.component.html',
  styleUrl: './auction-card.component.scss'
})
export class AuctionCardComponent{
  @Input() auctions: any[] = [];

  constructor(private router: Router) {}


  goToAuction(id: string): void {
    this.router.navigate(['/auctions/', id]);
  }
}