import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css'],
})
export class IframeComponent implements OnInit {
  @Input('name') name: string;
  url: string = `https://player.twitch.tv/?channel=${this.name}&muted=true&parent=localhost`;

  constructor() {}

  ngOnInit(): void {}
}
