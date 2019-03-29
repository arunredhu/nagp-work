import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = [
    {
      name: 'John',
      age: 23,
      gender: 'Male',
      experience: 4
    },
    {
      name: 'Deepak',
      age: 41,
      gender: 'Male',
      experience: 10
    },
    {
      name: 'Deepak',
      age: 41,
      gender: 'Male',
      experience: 2
    }
  ];

  constructor() {}
}
