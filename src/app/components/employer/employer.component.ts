import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employer.component.html',
  styleUrl: './employer.component.css'
})
export class EmployerComponent {

  mousein:boolean=false;
  mouseleave:boolean=false;
  

  team:any []=[
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/team1.png',heading:'Bruce Roberts',par:'Volunteer leader'},
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/team2.png',heading:'Bruce Roberts',par:'Volunteer leader'},
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/team3.png',heading:'Bruce Roberts',par:'Volunteer leader'},
    {image:'https://preview.colorlib.com/theme/charityworks/assets/img/gallery/team4.png',heading:'Bruce Roberts',par:'Volunteer leader'},
  ]
  
  
  mousehover(){
    this.mousein =true
    
  }
  mouseout(){
    console.log("mouseout");
    
  }
}
