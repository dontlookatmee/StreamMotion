import { Component, OnInit } from '@angular/core';
import {
  TwitchService,
  StreamsMetadata,
  Stream,
} from 'src/app/services/twitch/twitch.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  streams: StreamsMetadata;
  streamer: SafeResourceUrl;

  constructor(private tw: TwitchService, private sanitized: DomSanitizer) {}

  ngOnInit(): void {
    this.tw.getStreamers().subscribe((streams: StreamsMetadata) => {
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
}
