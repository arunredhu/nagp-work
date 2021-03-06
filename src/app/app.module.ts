import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LengthValidatorPipe } from './pipes/length-validator.pipe';
import { UserListComponent } from './user-list/user-list.component';

import { AppRoutingModule } from './app-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { ReUserFormComponent } from './re-user-form/re-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    LengthValidatorPipe,
    UserListComponent,
    UserFormComponent,
    ReUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
