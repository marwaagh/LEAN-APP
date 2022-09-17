import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'owlcarouselinAngular';  
  Images = ['../assets/image/pc.jpeg', '../assets/image/tg.jpeg', '../assets/image/desk.jpeg'];  
  
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 
}
