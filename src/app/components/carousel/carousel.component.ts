import { CommonModule } from '@angular/common';
import { Component,ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
@ViewChild('carouselSlide') carouselSlide!: ElementRef;
index = 0;
slides = [
  'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case1.png',
  'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case1.png',
  'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/case1.png'
];

ngAfterViewInit() {
  this.updateCarousel();
}

nextSlide() {
  this.index = (this.index + 1) % this.slides.length;
  this.updateCarousel();
}

prevSlide() {
  this.index = (this.index - 1 + this.slides.length) % this.slides.length;
  this.updateCarousel();
}

updateCarousel() {
  const offset = -this.index * 100;
  this.carouselSlide.nativeElement.style.transform = `translateX(${offset}%)`;
}
}
