import { Component } from '@angular/core';

@Component({
  // "app-root" – standart tag's name for app's main component
  selector: 'app-root', // tag in ../index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my application';
  
  today: Date = new Date();

  onButtonClick() {
    this.title = 'Button clicked!';
  }
}
