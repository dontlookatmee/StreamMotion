import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-streamer-mini',
  templateUrl: './streamer-mini.component.html',
  styleUrls: ['./streamer-mini.component.css'],
})
export class StreamerMiniComponent implements OnInit {
  @Input('name') name: string;
  @Input('avatar') avatar: string;
  @Input('game') game: string;
  @Input('status') status: string;
  @Input('viewrs') viewers: number;

  constructor() {}

  ngOnInit(): void {}
}
