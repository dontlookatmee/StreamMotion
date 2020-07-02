import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(30)],
    ],
  });

  constructor(private fb: FormBuilder, private auth: AuthService) {}

  ngOnInit(): void {}

  handleEmailSingin() {
    this.auth.handleEmailSingin(this.registerForm);
  }

  handleFacebookSignin() {
    this.auth.handleFacebookSignin();
  }
  handleGoogleSingin() {
    this.auth.handleGoogleSingin();
  }
  handleTwitterSignin() {
    this.auth.handleTwitterSignin();
  }
}
