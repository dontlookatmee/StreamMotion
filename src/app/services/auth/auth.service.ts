import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

interface User {
  avatar: string;
  description: string;
  email: string;
  name: string;
  password: string;
  services: [];
  status: string;
  uid: string;
  last_changed: Date;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  userId: string;

  constructor(
    private fAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.fAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          this.userId = user.uid;
          return this.afs.doc<User>(`profiles/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  handleEmailSingin(form: FormGroup) {
    if (form.valid) {
      const data = {
        email: form.controls.email.value,
        password: form.controls.password.value,
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

  handleFacebookSignin() {
    this.fAuth
      .signInWithPopup(new auth.FacebookAuthProvider())
      .then((x) => {
        this.router.navigate(['./']);
      })
      .catch((err) => {
        alert(err);
      });
  }

  handleTwitterSignin() {
    this.fAuth
      .signInWithPopup(new auth.TwitterAuthProvider())
      .then((x) => {
        this.router.navigate(['./']);
      })
      .catch((err) => {
        alert(err);
      });
  }
}
