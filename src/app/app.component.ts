import { Component } from '@angular/core';
import { UserTableComponent } from './user-table/user-table.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersService } from './users.service';

@Component({
  // "app-root" – standart tag's name for app's main component
  selector: 'app-root', // tag in ../index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
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
