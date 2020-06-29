import { TestBed } from '@angular/core/testing';

import { TwitchInterceptor } from './twitch.interceptor';

describe('TwitchInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TwitchInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TwitchInterceptor = TestBed.inject(TwitchInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
