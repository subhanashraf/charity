import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  
  card:any [] =[
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case1.png',heading:'Ensure Education For Every Poor Children',bar:'45%'},
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case2.png',heading:'Ensure Education For Every Poor Children',bar:'65%'},
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case3.png',heading:'Ensure Education For Every Poor Children',bar:'85%'},
  ]
}
