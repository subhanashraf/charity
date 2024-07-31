import { Component } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-latest-causes',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './latest-causes.component.html',
  styleUrl: './latest-causes.component.css'
})
export class LatestCausesComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Latest Causes");
  }
}
