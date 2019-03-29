import { Component, OnInit } from '@angular/core';
import { UsersService, Employee } from '../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  name = 'Angular workshop';
  inputType = 'number';
  isListShown = true;
  listFilter: string;
  employeess: Employee[] = [];

  today = new Date();

  isClass = true;

  constructor(public userService: UsersService) {
    // const subs = this.userService.getEmployees().subscribe(data => {
    //   this.employeess = data;
    // });
  }

  dec(exp) {
    alert(exp);
  }

  addEmployee() {
    const emp = {
      name: 'emp name',
      age: 24,
      gender: 'M',
      experience: 4
    };

    this.userService.addNewEmp(emp);
  }

  ngOnInit() {
    this.userService.fetchEmployees();
  }

  clickme() {}

  toggleList() {
    this.isListShown = !this.isListShown;
  }
}
