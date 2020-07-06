import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input('gameName') gameName: string;
  @Input('gameImage') gameImage: string;
  @Input('gameId') gameId: string;

  constructor() {}

  ngOnInit(): void {}

  renderImage(image: string) {
    console.log(this.gameImage);
    const endIndex = image.indexOf('{width}x{height}.jpg');
    if (endIndex !== -1) {
      return `${image.substr(0, endIndex)}100x100.jpg`;
    }

    return image;
  }
}
