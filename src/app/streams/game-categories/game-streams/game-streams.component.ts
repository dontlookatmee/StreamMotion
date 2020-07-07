import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { ActivatedRoute } from '@angular/router';
import { StreamsMetadata, Stream } from '../../../models/models';
import { Subscription, BehaviorSubject } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-game-streams',
  templateUrl: './game-streams.component.html',
  styleUrls: ['./game-streams.component.css'],
})
export class GameStreamsComponent implements OnInit {
  gameId: string;
  streams = new BehaviorSubject([]);
  cursor = '';
  fetchGameStreamsSub: Subscription;

  constructor(
    public tw: TwitchService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.gameId = this.activatedRouter.snapshot.paramMap.get('id');
    this.fetchStreamers();
  }

  onScroll() {
    this.fetchStreamers();
  }

  fetchStreamers() {
    this.tw
      .fetchGameStreams(this.gameId, this.cursor)
      .pipe(
        tap((streams: StreamsMetadata) => {
          this.cursor = streams.pagination.cursor;
          const newStreams = _.slice(streams.data, 0);
          const currentStreams = this.streams.getValue();

          this.streams.next(_.concat(currentStreams, newStreams));
        }),
        take(1)
      )
      .subscribe();
  }
}
