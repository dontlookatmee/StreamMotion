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

interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
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
  async handleEmailSingin(form: FormGroup) {
    if (form.valid) {
      const data = {
        email: form.controls.email.value,
        password: form.controls.password.value,
      };
      const credentials = await this.afAuth.signInWithEmailAndPassword(
        data.email,
        data.password
      );
      return this.updateUserData(credentials.user);
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
    return this.router.navigate(['./']);
  }

  updateUserData({ uid, email, displayName, photoURL }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${uid}`
    );

    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };

    return userRef.set(data, { merge: true });
  }
}
