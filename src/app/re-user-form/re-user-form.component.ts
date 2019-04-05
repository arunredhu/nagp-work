import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';

function nameValidator(): ValidatorFn {
  return (ctrl: AbstractControl) => {
    console.log(ctrl);
    return { name: 'error' };
  };
}

@Component({
  selector: 'app-re-user-form',
  templateUrl: './re-user-form.component.html',
  styleUrls: ['./re-user-form.component.scss']
})
export class ReUserFormComponent implements OnInit {
  userForm: FormGroup;
  // userForm: FormGroup = new FormGroup({
  //   name: new FormControl('', Validators.required),
  //   age: new FormControl('', Validators.required),
  //   address: new FormGroup({
  //     addressName1: new FormControl('', Validators.required),
  //     addressName2: new FormControl('', Validators.required)
  //   })
  // });

  get nameCtrl() {
    return this.userForm.get('name');
  }

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(5)],
      age: '',
      address: this.fb.group({
        addressName1: '',
        addressName2: ''
      })
    });
  }

  ngOnInit() {}

  attachAddress() {
    // this.userForm.addControl('address', )
  }
}
