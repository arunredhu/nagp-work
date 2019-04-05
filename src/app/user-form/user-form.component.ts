import { Component, OnInit } from '@angular/core';
import { Employee } from '../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userModel: Employee = {
    name: '',
    age: null,
    experience: null,
    gender: 'Male'
  };

  constructor() {}

  ngOnInit() {}
}
