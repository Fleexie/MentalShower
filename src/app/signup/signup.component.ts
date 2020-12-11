import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordValidator } from '../passwordValidator';
import { LoginService } from '../_services/user.service';
import md5 from 'md5';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../_styles/styles.css', './signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;
  invalidLoginMessage = false;
  submitted = false;
  emails = [];
  Users: any;
  isTaken = false;
  constructor(
    fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: [
        '',
        Validators.compose([
          Validators.required,
          PasswordValidator.cannotContainSpace,
        ]),
      ],
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }
  // uses a regex to check if email is valid
  isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  getAllUsers() {
    this.loginService.getAllUsers().subscribe((data) => {
      this.Users = data;
    });
  }

  register() {
    const userData = {
      email: this.form.controls.email.value,
      username: this.form.controls.username.value,
      password: this.form.controls.password.value,
    };
    if (this.Users.some(code => code.email === userData.email)) {
      return this.isTaken = true;
    }
    if (!this.isValidEmail(userData.email)) {
      return this.invalidLoginMessage = true;
    }
    else {
      this.loginService.userRegistration(userData).subscribe(
        (data) => {
          const response: any = data;
          if (response.email === userData.email) {
            this.router.navigate(['profile']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }



  }

}
