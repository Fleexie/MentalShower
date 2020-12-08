import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../_services/user.service';
import { PasswordValidator } from '../passwordValidator';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../_styles/styles.css', './login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  invalidLoginMessage;
  options: FormGroup;
  // hideRequiredControl = new FormControl(false);
  // floatLabelControl = new FormControl('auto');
  rooms;
  constructor(
    fb: FormBuilder,
    private loginService: LoginService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.form = fb.group({
      username: ['', Validators.required],
      password: [
        '',
        Validators.compose([
          Validators.required,
          PasswordValidator.cannotContainSpace,
        ]),
      ],
    });

    // this.options = fb.group({
    //   hideRequired: this.hideRequiredControl,
    //   floatLabel: this.floatLabelControl,
    // });
  }

  login() {
    const result = this.loginService.login(this.form.controls.username.value,
      this.form.controls.password.value);

    if (!result) {
      this.form.controls.password.setErrors({
        invalidLogin: true
      });
    }
  }

  register() {
    this.router.navigate(['signup']);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.invalidLoginMessage = params['invalidLoginMessage'];
    });
  }

}