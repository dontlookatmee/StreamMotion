import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { StreamsMetadata, Token, Games } from '../../models/models';

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

  fetchAllStreams() {
    return this.http.get<StreamsMetadata>(
      'https://api.twitch.tv/helix/streams'
    );
  }

  fetchTopGames() {
    return this.http.get<Games>('https://api.twitch.tv/helix/games/top', {
      params: {
        first: '100',
      },
    });
  }

  fetchGameStreams(gameId: string, after?: string) {
    let query = {
      game_id: gameId,
      first: '20',
      after,
    };

    return this.http.get<StreamsMetadata>(
      'https://api.twitch.tv/helix/streams',
      {
        params: query,
      }
    );
  }

  ngOnInit() {}
}
