import { Component, OnInit } from '@angular/core';
import { CategoryCardComponent } from "./category-card/category-card.component";
import { AuctionCardComponent } from "../../common/auction-card/auction-card.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryCardComponent, AuctionCardComponent, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public auctions: any[] = [];

  constructor(private http: HttpClient) {}
  
    ngOnInit() {
      
  
      this.http.get<any>('assets/data/auctions.json')
        .subscribe(data => {
      this.auctions = data.auctions;
    });
    
  }
}
