import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

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

  today = new Date();

  isClass = true;

  constructor(public userService: UsersService) {}

  ngOnInit() {}

  clickme() {}

  toggleList() {
    this.isListShown = !this.isListShown;
  }
}
