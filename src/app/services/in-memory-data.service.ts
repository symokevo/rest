import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from'../user';  
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 11, first_name: 'Eve', last_name: 'Holt', avatar: 'assets/img/user.jpg' },
      { id: 12, first_name: 'Simon', last_name: 'Kevin', avatar: 'assets/img/user.jpg' },
      { id: 13, first_name: 'Kevin', last_name: 'Rabbs', avatar: 'assets/img/user.jpg' },
      { id: 14, first_name: 'Ace', last_name: 'Teasea', avatar: 'assets/img/user.jpg' },
      { id: 15, first_name: 'Code', last_name: 'Simonwise', avatar: 'assets/img/user.jpg' },
      { id: 16, first_name: 'Moodhvenik', last_name: 'Bishantepe', avatar: 'assets/img/user.jpg' },
      { id: 17, first_name: 'Tera', last_name: 'Softs', avatar: 'assets/img/user.jpg' },
      { id: 18, first_name: 'Jonte', last_name: 'Robin', avatar: 'assets/img/user.jpg' },
      { id: 19, first_name: 'Augustine', last_name: 'Junior', avatar: 'assets/img/user.jpg' },
      { id: 20, first_name: 'David', last_name: 'Barrie', avatar: 'assets/img/user.jpg' },
      { id: 21, first_name: 'Maxie', last_name: 'Ochi', avatar: 'assets/img/user.jpg' }
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }

  constructor( private http: HttpClient ) { }
}
