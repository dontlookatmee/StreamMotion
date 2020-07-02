import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]],
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(30)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private fAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleEmailSingin() {
    if (this.registerForm.valid) {
      const data = {
        email: this.registerForm.controls.email.value,
        password: this.registerForm.controls.password.value,
      };

      this.fAuth
        .signInWithEmailAndPassword(data.email, data.password)
        .then((x) => {
          this.router.navigate(['./']);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  handleGoogleSingin() {
    this.fAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((x) => {
        this.router.navigate(['./']);
      })
      .catch((err) => {
        alert(err);
      });
  }
}
