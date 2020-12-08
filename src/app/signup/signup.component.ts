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
  invalidLoginMessage;
  submitted = false;
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
    this.route.params.subscribe(params => {
      this.invalidLoginMessage = params.invalidLoginMessage;
    });
  }

  register() {
    const photoUrl = `http://gravatar.com/avatar/${md5(
      this.form.controls.email.value
    )}?d=identicon`;
    const result = this.loginService.signup(this.form.controls.username.value, this.form.controls.email.value,
      this.form.controls.password.value, photoUrl);
    if (!result) {
      this.form.controls.password.setErrors({
        invalidLogin: true
      });
    }
  }

}
