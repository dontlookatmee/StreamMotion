import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleEmailSingin() {
    this.auth.handleEmailSingin(this.registerForm).then((x) => {
      this.router.navigate(['./']);
    });
  }

  handleFacebookSignin() {
    this.auth.handleFacebookSignin().then((x) => {
      this.router.navigate(['/']);
    });
  }
  handleGoogleSingin() {
    this.auth.handleGoogleSingin().then((x) => {
      this.router.navigate(['/']);
    });
  }
  handleTwitterSignin() {
    this.auth.handleTwitterSignin().then((x) => {
      this.router.navigate(['/']);
    });
  }
}
