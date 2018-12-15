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
      {firstname: 'Степан', lastname: 'Сидоров'},
      {firstname: 'Богдан', lastname: 'Ступка'},
      {firstname: 'Вася', lastname: 'Хмурый'},
      {firstname: 'Илья', lastname: 'Кузнецов'},
      {firstname: 'Дмитрий', lastname: 'Бадьянов'},
      {firstname: 'Света', lastname: 'Мицура'},
      {firstname: 'Евгения', lastname: 'Степаненко'},
      {firstname: 'Вакула', lastname: 'Коваль'},
      {firstname: 'Ян', lastname: 'Скрипко'}
    ];
    return { users };
  }

  constructor() { }
}
