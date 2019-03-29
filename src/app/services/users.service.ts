import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Employee {
  name: string;
  age: number;
  gender: string;
  experience: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    const url = '/assets/employee.json';

    return this.http.get<Employee[]>(url);
  }
}
