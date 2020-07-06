import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { Games } from '../../models/models';

@Component({
  selector: 'app-game-categories',
  templateUrl: './game-categories.component.html',
  styleUrls: ['./game-categories.component.css'],
})
export class GameCategoriesComponent implements OnInit {
  topGames: Games;

  constructor(private tw: TwitchService) {}

  ngOnInit(): void {
    this.tw.fetchTopGames().subscribe((games: Games) => {
      this.topGames = games;
    });
  }
}
