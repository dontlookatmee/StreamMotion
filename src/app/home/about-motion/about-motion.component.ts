import { Component, OnInit } from '@angular/core';
import { TwitchService } from 'src/app/services/twitch/twitch.service';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { StreamsMetadata, Stream } from '../../models/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about-motion',
  templateUrl: './about-motion.component.html',
  styleUrls: ['./about-motion.component.css'],
})
export class AboutMotionComponent implements OnInit {
  streams: StreamsMetadata;
  streamer: SafeResourceUrl;
  twitchServiceSub: Subscription;

  constructor(private tw: TwitchService, private sanitized: DomSanitizer) {}

  ngOnInit(): void {
    this.twitchServiceSub = this.tw
      .fetchStreams()
      .subscribe((streams: StreamsMetadata) => {
        this.streams = streams;
        this.streamer = this.getRandomStreamer(streams.data);
      });
  }

  getRandomStreamer(streams: Stream[]) {
    const randomNumb = Math.floor(Math.random() * streams.length);
    return this.secureUrl(
      `https://player.twitch.tv/?channel=${streams[randomNumb]?.user_name}&muted=true&parent=localhost`
    );
  }

  secureUrl(url: string): SafeResourceUrl {
    return this.sanitized.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy(): void {
    this.twitchServiceSub.unsubscribe();
  }
}
