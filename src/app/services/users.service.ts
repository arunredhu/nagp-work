import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { tap } from 'rxjs/operators';

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
  employees$: BehaviorSubject<Employee[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  getEmployees() {
    const url = '/assets/employee.json';

    return this.http.get<Employee[]>(url).pipe(
      tap(data => {
        this.employees$.next(data);
      })
    );
  }

  fetchEmployees() {
    const url = '/assets/employee.json';

    this.http.get<Employee[]>(url).subscribe(data => {
      this.employees$.next(data);
    });
  }

  addNewEmp(emp: Employee) {
    const currentData = this.employees$.getValue();
    const updatedData = [...currentData, emp];

    this.employees$.next(updatedData);
  }
}
