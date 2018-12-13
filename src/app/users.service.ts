import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public clickCount: number = 0;
  public creationDate: Date = new Date();

  constructor() { }

  public getUsers(): Array<any> {
    return [
      {firstname: 'Пётр', lastname: 'Петров'},
      {firstname: 'Иван', lastname: 'Иванов'},
      {firstname: 'Степан', lastname: 'Сидоров'}
    ];
  }

  public increase() {
    this.clickCount++;
  }
}
