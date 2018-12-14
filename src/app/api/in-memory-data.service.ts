import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  /* This automaticly gives endpoint path "/api/users"
   * If we add const "userGroups" for example then we "return { users, userGroups }" (for "/api/userGroups")
   */
  createDb() {
    const users = [
      {firstname: 'Пётр', lastname: 'Петров'},
      {firstname: 'Иван', lastname: 'Иванов'},
      {firstname: 'Степан', lastname: 'Сидоров'}
    ];
    return { users };
  }

  constructor() { }
}
