import { Component } from '@angular/core';
import { TwitchService } from './services/twitch/twitch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private tw: TwitchService) {
    this.tw.storeToken().subscribe();
    this.tw.getStreamers().subscribe((x) => console.log(x));
  }
}
