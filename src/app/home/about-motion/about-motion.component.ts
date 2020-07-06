import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { StreamsMetadata, Stream } from '../../models/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-motion',
  templateUrl: './about-motion.component.html',
  styleUrls: ['./about-motion.component.css'],
})
export class AboutMotionComponent implements OnInit {
  streams: StreamsMetadata;
  streamer: string;
  twitchServiceSub: Subscription;

  constructor(private tw: TwitchService) {}

  ngOnInit(): void {
    this.twitchServiceSub = this.tw
      .fetchAllStreams()
      .subscribe((streams: StreamsMetadata) => {
        console.log(streams);
        this.streams = streams;
        this.streamer = this.getRandomStreamer(streams.data);
      });
  }

  getRandomStreamer(streams: Stream[]) {
    const randomNumb = Math.floor(Math.random() * streams.length);
    return `https://player.twitch.tv/?channel=${streams[randomNumb]?.user_name}&muted=true&parent=localhost`;
  }

  ngOnDestroy(): void {
    this.twitchServiceSub.unsubscribe();
  }
}
