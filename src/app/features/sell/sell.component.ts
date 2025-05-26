import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sell',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './sell.component.html',
  styleUrl: './sell.component.scss'
})
export class SellComponent {

  numeProdus?: string;
  pret?: number;
  perioadaLicitatieStart?: Date;
  perioadaLicitatieEnd?: Date;
  imagine?: File;
  descriere?:string;


  onUpload(event: Event) {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.imagine = files[0];
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
  }
}
