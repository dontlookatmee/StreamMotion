import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream-frame',
  templateUrl: './stream-frame.component.html',
  styleUrls: ['./stream-frame.component.css'],
})
export class StreamFrameComponent implements OnInit {
  @Input('streamerId') streamerId: string;

  streamer: string;
  constructor() {}

  ngOnInit(): void {}
}
