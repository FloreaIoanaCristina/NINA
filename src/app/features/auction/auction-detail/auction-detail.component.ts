import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, map, takeWhile } from 'rxjs';
import { CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-auction-detail',
  standalone: true,
  imports: [ 
    CommonModule,
    HttpClientModule,
    CountdownModule
  ], 
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.scss']
})
export class AuctionDetailComponent implements OnInit {
  auction: any;
  countdown: string = '';
  countdownConfig: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>('assets/data/auctions.json').subscribe(data => {
      this.auction = data.auctions.find((a: any) => a.id == id);
      const startDate = new Date(this.auction.starting_date).getTime();
      console.log(startDate.toString());
      const now = Date.now();

      const secondsLeft = Math.floor((startDate - now) / 1000);

      this.countdownConfig = {
        leftTime: secondsLeft > 0 ? secondsLeft : 0,
        format: 'd:HH:mm:ss',
        notify: [1], 
      };
      });
  }
}