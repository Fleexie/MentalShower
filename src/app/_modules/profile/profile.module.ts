import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
