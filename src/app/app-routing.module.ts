import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';

const route: Route[] = [
  {
    path: 'employee',
    component: UserListComponent,
    canActivate: []
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
