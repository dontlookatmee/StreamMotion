import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input('name') name: string;
  @Input('image') image: string;

  constructor() {}

  ngOnInit(): void {}

  editImage(img: string) {
    const cutIndex = img.indexOf('{width}');
    if (cutIndex === -1) {
      return img;
    }
    return img.substr(0, cutIndex) + '100x100.jpg';
  }
}
