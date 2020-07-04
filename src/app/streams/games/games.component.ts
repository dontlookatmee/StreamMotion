import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { Subscription } from 'rxjs';
import { Games } from '../../models/models';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  topGames: Games;
  twitchService: Subscription;

  constructor(private tw: TwitchService) {}

  ngOnInit(): void {
    this.twitchService = this.tw.getTopGames().subscribe((games: Games) => {
      this.topGames = games;
    });
  }

  ngOnDestroy(): void {
    this.twitchService.unsubscribe();
  }
}
