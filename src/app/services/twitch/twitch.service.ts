import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';

export interface Token {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface Stream {
  game_id: string;
  id: string;
  lagunage: string;
  started_at: string;
  thumbnail_url: string;
  title: string;
  type: string;
  user_id: string;
  user_name: string;
  view_count: number;
}

export interface StreamsMetadata {
  data: Stream[];
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
          if (this.getToken() !== token.access_token) {
            localStorage.setItem('tokenId', JSON.stringify(token.access_token));
            localStorage.setItem('expiresAt', JSON.stringify(token.expires_in));
          }
        })
      );
  }

  getToken() {
    const token = localStorage.getItem('tokenId');
    return JSON.parse(token);
  }

  getStreamers() {
    return this.http.get<StreamsMetadata>(
      'https://api.twitch.tv/helix/streams'
    );
  }

  ngOnInit() {}
}
