import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import * as firebase from 'firebase';

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  password?: string;
  favouriteStreams?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User>;
  userId: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          this.userId = user.uid;
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async handleEmailSignup(form: FormGroup) {
    if (form.valid && form.get('passwords').valid) {
      const email = form.get('email').value;
      const password = form.get('passwords.password').value;
      const displayName = form.get('displayName').value;
      await this.afAuth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          const data = {
            uid: user.user.uid,
            email,
            password,
            displayName,
            photoURL: '',
          };
          this.updateUserData(data, 'email');
        });
    }
  }

  async handleEmailSingin(form: FormGroup) {
    if (form.valid) {
      const data = {
        email: form.get('email').value,
        password: form.get('password').value,
      };

      await this.afAuth.signInWithEmailAndPassword(data.email, data.password);
    }
  }

  async handleGoogleSingin() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credentials.user);
  }

  async handleFacebookSignin() {
    const provider = new auth.FacebookAuthProvider();
    const credentials = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credentials.user);
  }

  async handleTwitterSignin() {
    const provider = new auth.TwitterAuthProvider();
    const credentials = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credentials.user);
  }

  async signOut() {
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  async updateUserData(
    { uid, email, displayName, photoURL, password }: User,
    type?: string
  ) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${uid}`
    );

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };

    if (type === 'email') {
      data['password'] = password;
    }

    return await userRef.update(data).catch((err) => {
      data['favouriteStreams'] = [];
      userRef.set(data, { merge: true });
    });
  }
}
