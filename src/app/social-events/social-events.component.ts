import { Component } from '@angular/core';
import { CounterSectionComponent } from "../components/counter/counter.component";
import { DonationsComponent } from "../components/donations/donations.component";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-social-events',
  standalone: true,
  imports: [CounterSectionComponent, DonationsComponent],
  templateUrl: './social-events.component.html',
  styleUrl: './social-events.component.css'
})
export class SocialEventsComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Social Events");
  }
}
