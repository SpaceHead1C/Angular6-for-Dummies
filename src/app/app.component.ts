import { Component } from '@angular/core';
import { UserTableComponent } from './user-table/user-table.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  // "app-root" – standart tag's name for app's main component
  selector: 'app-root', // tag in ../index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my application';
  
  users: Array<any> = [
    {firstname: 'Пётр', lastname: 'Петров'},
    {firstname: 'Иван', lastname: 'Иванов'},
    {firstname: 'Степан', lastname: 'Сидоров'}
  ];

  today: Date = new Date();

  onButtonClick() {
    this.title = 'Button clicked!';
  }
}
