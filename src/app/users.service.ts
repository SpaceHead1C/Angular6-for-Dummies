import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  public getUsers(): Array<any> {
    return [
      {firstname: 'Пётр', lastname: 'Петров'},
      {firstname: 'Иван', lastname: 'Иванов'},
      {firstname: 'Степан', lastname: 'Сидоров'}
    ];
  }
}
