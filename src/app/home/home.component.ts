import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from "../components/card/card.component";
import { DivimageComponent } from '../components/divimage/divimage.component';
import { DonationsComponent } from '../components/donations/donations.component';
import { EmployerComponent } from '../components/employer/employer.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { CounterSectionComponent } from '../components/counter/counter.component';
import { FlowsectionComponent } from '../components/flowsection/flowsection.component';
import { ImageAttactSectionComponent } from "../components/image-attact-section/image-attact-section.component";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, FlowsectionComponent, CardComponent, CounterSectionComponent, CarouselComponent, DivimageComponent, DonationsComponent, EmployerComponent, ImageAttactSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Charity");
  }  
  

}