import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { tap, switchMap } from 'rxjs/operators';

export interface Token {
  access_token: string;
  expires_in: number;
  token_type: string;
}

@Injectable({
  providedIn: 'root',
})
export class TwitchService implements OnInit {
  constructor(private http: HttpClient) {}

  storeToken() {
    return this.http
      .post<Token>(
        'https://id.twitch.tv/oauth2/token',
        {
          client_id: environment.clientId,
          client_secret: environment.clientSecret,
          grant_type: 'client_credentials',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        tap((token: Token) => {
          console.log('tap');
          localStorage.setItem('tokenId', JSON.stringify(token.access_token));
          localStorage.setItem('expiresAt', JSON.stringify(token.expires_in));
        })
      );
  }

  getToken() {
    const token = localStorage.getItem('tokenId');
    return JSON.parse(token);
  }

  ngOnInit() {}
}
