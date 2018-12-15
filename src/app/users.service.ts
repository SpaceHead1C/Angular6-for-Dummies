import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Page } from './models/page';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public clickCount: number = 0;
  public creationDate: Date = new Date();

  constructor(private httpClient: HttpClient) { }

  private usersUrl = 'api/users'; // endpoint

  public getUsers(page: number, itemsPerPage: number): Observable<Page> {
    let users = this.httpClient.get<User[]>(this.usersUrl);
    return this.getPageItems(users, page, itemsPerPage);
  }

  private getPageItems(users: Observable<Array<User>>, page: number, itemsPerPage: number): Observable<Page> {
    return users.pipe(
      map(user => {
          let startIndex = itemsPerPage * (page - 1);
          return new Page(user.length, user.slice(startIndex, startIndex + itemsPerPage));
        })
    );
  }

  public increase() {
    this.clickCount++;
  }
}
