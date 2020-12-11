import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../_services/user.service';
import { PasswordValidator } from '../passwordValidator';
import { ActivatedRoute, Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
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
      email: ['', Validators.required],
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
    const userData = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    };
    this.loginService.userlogin(userData.email).subscribe((data) => {
      const response: any = data;
      console.log(response);
      bcrypt.compare(userData.password, response[0].password, (err, Data) => {
        if (Data) {
          this.router.navigate(['profile']);
        } else {
          alert('You have entered wrong credentials');
        }
      });
    });


  }
  register() {
    this.router.navigate(['signup']);
  }
}
