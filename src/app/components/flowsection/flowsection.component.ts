import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flowsection',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './flowsection.component.html',
  styleUrl: './flowsection.component.css'
})
export class FlowsectionComponent {
  valueone:boolean =false;
  valuetwo:boolean =false;
  valuethree:boolean =false;
  mousehoverone(){
  this.valueone =true;
  }
  mouseleaveone(){
    this.valueone=false;
  }
  mousehovertwo(){
  this.valuetwo =true;
  }
  mouseleavetwo(){
    this.valuetwo=false;
  }
  mousehoverthree(){
  this.valuethree =true;
  }
  mouseleavethree(){
    this.valuethree=false;
  }
 
}
