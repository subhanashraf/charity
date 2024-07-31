
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterSectionComponent implements OnInit {
  counters = [
    { id: 'counter1', endValue: 6200 },
    { id: 'counter2', endValue: 80 },
    { id: 'counter3', endValue: 256 },
    { id: 'counter4', endValue: 256 }
  ];

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const section = document.querySelector('.min-h-40') as HTMLElement;
    if (section) {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= window.innerHeight) {
        this.animateCounters();
        window.removeEventListener('scroll', this.onWindowScroll, true);
      }
    }
  }

  animateCounters() {
    this.counters.forEach(counter => {
      this.countUp(counter.id, counter.endValue);
    });
  }

  countUp(id: string, endValue: number) {
    let startValue = 0;
    const duration = 2000;
    const increment = endValue / (duration / 20);

    const element = document.getElementById(id);
    if (element) {
      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
          startValue = endValue;
          clearInterval(interval);
        }
        element.innerText = Math.floor(startValue).toString();
      }, 20);
    }
  }
}
