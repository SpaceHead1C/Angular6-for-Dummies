import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  providers: [UsersService]
})
export class UserTableComponent implements OnInit {
  public users: Array<any>;
  public page: number;
  public collectionSize: number;

  constructor(private usersService: UsersService) {
    this.page = 1;

    usersService.getUsers().subscribe(users => {
      this.users = users;
      this.collectionSize = this.users.length;
    });
  }

  ngOnInit() {
  }

  onPageChange(pageNumber) {
    console.log('page changed: ' + pageNumber);
  }

}
