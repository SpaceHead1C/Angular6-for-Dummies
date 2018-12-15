import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  providers: [UsersService]
})
export class UserTableComponent implements OnInit {
  public users: Array<User>;
  public page: number;
  public collectionSize: number;
  public itemsPerPage: number;

  constructor(private usersService: UsersService) {
    this.page = 1;
    this.itemsPerPage = 3;
    this.loadPage();
  }

  ngOnInit() {
  }

  onPageChange(pageNumber) {
    this.loadPage();
  }

  private loadPage() {
    this.usersService.getUsers(this.page, this.itemsPerPage).subscribe(page => {
      this.users = page.rows;
      this.collectionSize = page.totalCount;
    });
  }

}
