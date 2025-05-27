import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuctionCardComponent } from "../../common/auction-card/auction-card.component";
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-auction',
  standalone: true,
  imports: [HttpClientModule, AuctionCardComponent],
  templateUrl: './auction.component.html',
  styleUrl: './auction.component.scss'
})
export class AuctionComponent implements OnInit {

  public auctions: any[] = [];
  public filteredAuctions: any[] = this.auctions;
  category: string | null = null;
  searchTerm: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const data$ = this.http.get<any>('assets/data/auctions.json');
    const params$ = this.route.queryParamMap;

    combineLatest([data$, params$]).subscribe(([data, params]) => {
      this.auctions = data.auctions;
      this.category = params.get('category');
      this.applyFilters();
    });
  
  }

  applyFilters() {
    this.filteredAuctions = this.auctions.filter(auction => {
      const categoryMatch = this.category ? auction.category === this.category : true;
      const searchMatch = auction.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
    this.applyFilters();
  }
}
