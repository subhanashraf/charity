import { Component } from '@angular/core';
import { FlowsectionComponent } from "../components/flowsection/flowsection.component";
import { CardComponent } from "../components/card/card.component";
import { ImageAttactSectionComponent } from "../components/image-attact-section/image-attact-section.component";
import { DivimageComponent } from '../components/divimage/divimage.component';
import { CounterSectionComponent } from '../components/counter/counter.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FlowsectionComponent, CardComponent, ImageAttactSectionComponent,DivimageComponent,CounterSectionComponent,CarouselComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("About");
  }
}
