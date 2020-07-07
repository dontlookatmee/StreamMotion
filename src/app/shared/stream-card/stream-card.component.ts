import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.css'],
})
export class StreamCardComponent implements OnInit {
  @Input('image') image: string;
  @Input('name') name: string;
  @Input('title') title: string;
  @Input('viewers') viewers: number;
  @Input('id') id: string;

  constructor() {}

  ngOnInit(): void {}
}
