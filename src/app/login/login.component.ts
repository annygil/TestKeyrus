import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './custom-validators';
import { FormControl,FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;
  password: string;
  username: string;
  id: string;
  isSubmited: boolean = false;
  public frmSignup: FormGroup;
  ngOnInit() {
  }
  constructor(private fb: FormBuilder) {
    this.frmSignup = this.createSignupForm();
  }
  createSignupForm(): FormGroup {
    return this.fb.group(
      {
        password: [
          null,
          Validators.compose([
            Validators.required,
            // check whether the entered password has a number
            CustomValidators.patternValidator(/\d/, {
              hasNumber: true
            }),
            // check whether the entered password has upper case letter
            CustomValidators.patternValidator(/[A-Z]/, {
              hasCapitalCase: true
            }),
            // check whether the entered password has a lower case letter
            CustomValidators.patternValidator(/[a-z]/, {
              hasSmallCase: true
            }),
            Validators.minLength(8)
          ])
        ],
        username: [null, Validators.compose([Validators.required])]
      },
      {}
    );
  }
  submit() {
    this.isSubmited = true;
  }
}
