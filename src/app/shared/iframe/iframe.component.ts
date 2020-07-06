import { Component, OnInit, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
})
export class IframeComponent implements OnInit {
  @Input('name') name: string;
  link: SafeResourceUrl;
  constructor(private sanitized: DomSanitizer) {}

  ngOnInit(): void {}

  getRandomStreamer() {
    this.link = this.secureUrl(
      `https://player.twitch.tv/?channel=${this.name}&muted=true&parent=localhost`
    );
  }

  secureUrl(url: string): SafeResourceUrl {
    return this.sanitized.bypassSecurityTrustResourceUrl(url);
  }
}
