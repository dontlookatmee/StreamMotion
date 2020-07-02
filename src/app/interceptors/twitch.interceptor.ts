import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { TwitchService, Token } from '../services/twitch/twitch.service';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';

@Injectable()
export class TwitchInterceptor implements HttpInterceptor {
  constructor(private tw: TwitchService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.includes('https://api.twitch.tv/helix/')) {
      const newReq = request.clone({
        setHeaders: {
          'Client-ID': environment.clientId,
          Authorization: `Bearer ${this.tw.getToken()}`,
        },
      });
      return next.handle(newReq);
    }
    return next.handle(request);
  }
}
