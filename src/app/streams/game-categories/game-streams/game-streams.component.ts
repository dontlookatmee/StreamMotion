import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { ActivatedRoute } from '@angular/router';
import { StreamsMetadata, Stream } from '../../../models/models';
import { Subscription, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-game-streams',
  templateUrl: './game-streams.component.html',
  styleUrls: ['./game-streams.component.css'],
})
export class GameStreamsComponent implements OnInit {
  gameId: string;
  streams = new BehaviorSubject([]);
  streamsNumber = 10;
  fetchGameStreamsSub: Subscription;

  constructor(
    public tw: TwitchService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('ngoninit');
    this.gameId = this.activatedRouter.snapshot.paramMap.get('id');
    this.fetchStreamers();
  }

  onScroll() {
    console.log('scrolled');
    if (this.streamsNumber >= 100) return;
    this.fetchStreamers();
  }

  fetchStreamers() {
    this.streamsNumber += 10;

    this.tw
      .fetchGameStreams(this.gameId, this.streamsNumber)
      .pipe(
        tap((streams: StreamsMetadata) => {
          this.streams.next(streams.data);
        })
      )
      .subscribe();
  }
}
