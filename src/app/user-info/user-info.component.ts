import {
  Component,
  OnInit,
  Input,
  OnChanges,
  DoCheck,
  EventEmitter,
  Output
} from '@angular/core';

import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnChanges, DoCheck {
  @Input() user;

  @Output() dec = new EventEmitter();

  decrement() {
    this.user.experience = this.user.experience - 1;
    this.dec.emit(this.user.experience);
  }

  ngOnInit() {
    console.log('init called', this.user.name);
  }

  ngOnChanges() {
    console.log('onchanges called', this.user.name);
  }

  ngDoCheck() {
    console.log('doCheck called', this.user.name);
  }
}
