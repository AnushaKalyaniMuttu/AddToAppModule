import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrl: './app.component.css'
  styles: [`
  h2{
    color:pink;
}
  `]
})
export class AppComponent {
   name = 'Hi! anusha';
}
