import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  /* This automaticly gives endpoint path "/api/users"
   * If we add const "userGroups" for example then we "return { users, userGroups }" (for "/api/userGroups")
   */
  createDb() {
    const users = new Array<User> (
      {id: 1,  firstname: 'Пётр',    lastname: 'Петров'},
      {id: 2,  firstname: 'Иван',    lastname: 'Иванов'},
      {id: 3,  firstname: 'Степан',  lastname: 'Сидоров'},
      {id: 4,  firstname: 'Богдан',  lastname: 'Ступка'},
      {id: 5,  firstname: 'Вася',    lastname: 'Хмурый'},
      {id: 6,  firstname: 'Илья',    lastname: 'Кузнецов'},
      {id: 7,  firstname: 'Дмитрий', lastname: 'Бадьянов'},
      {id: 8,  firstname: 'Света',   lastname: 'Мицура'},
      {id: 9,  firstname: 'Евгения', lastname: 'Степаненко'},
      {id: 10, firstname: 'Вакула',  lastname: 'Коваль'},
      {id: 11, firstname: 'Ян',      lastname: 'Скрипко'}
    );
    return { users };
  }

  constructor() { }
}
