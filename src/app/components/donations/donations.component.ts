import { Component } from '@angular/core';

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {
  donation:any []=[
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/socialEvents1.png',heading:'Donation is Hope',bar:'45%'},
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/socialEvents2.png',heading:'Donation is Hope',bar:'45%'},
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/socialEvents3.png',heading:'Donation is Hope',bar:'45%'},
    
  ]
}
