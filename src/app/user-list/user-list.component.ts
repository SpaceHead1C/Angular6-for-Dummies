import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UsersService]
})
export class UserListComponent implements OnInit {
  public users: Array<any>;

  constructor(public usersService: UsersService) {
    this.users = usersService.getUsers();
  }

  ngOnInit() {
  }

}
