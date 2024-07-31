import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from './components/footer/footer.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxUiLoaderRouterModule } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink, 
    HomeComponent,
    FooterComponent,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'charity';
  meun:boolean=false;
  
  meundisplay(){
    this.meun =!this.meun
    console.log(this.meun);
  }
  
}
