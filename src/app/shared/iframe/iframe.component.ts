import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
})
export class IframeComponent implements OnInit {
  @Input('name') name: string;
  @Input('styles') styles: {} = { width: '100%', height: '450px' };
  url: string;

  constructor() {}

  ngOnInit(): void {
    this.url = `https://player.twitch.tv/?channel=${this.name}&muted=true&parent=localhost`;
  }

  ngAfterViewInit(): void {}
}
