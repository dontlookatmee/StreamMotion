import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { ActivatedRoute } from '@angular/router';
import { StreamsMetadata } from '../../../models/models';
import { Subscription, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-game-streams',
  templateUrl: './game-streams.component.html',
  styleUrls: ['./game-streams.component.css'],
})
export class GameStreamsComponent implements OnInit {
  streamers: StreamsMetadata;
  streamersSubject = new BehaviorSubject([]);
  fetchGameStreamsSub: Subscription;

  constructor(
    private tw: TwitchService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    this.fetchGameStreamsSub = this.tw
      .fetchGameStreams(id, '100')
      .subscribe((streams: StreamsMetadata) => {
        this.streamers = streams;
      });
  }

  onScroll() {}

  ngOnDestroy(): void {
    this.fetchGameStreamsSub.unsubscribe();
  }
}
