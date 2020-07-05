import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-streams',
  templateUrl: './game-streams.component.html',
  styleUrls: ['./game-streams.component.css'],
})
export class GameStreamsComponent implements OnInit {
  constructor(
    private tw: TwitchService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const gameId = this.activatedRoute.snapshot.params.id;
    this.tw.getStreamers(gameId).subscribe((x) => console.log(x));
  }
}
