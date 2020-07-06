import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCardComponent implements OnInit {
  @Input('gameName') gameName: string;
  @Input('gameImage') gameImage: string;
  @Input('gameId') gameId: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToGame() {
    this.router.navigate(['./', this.gameId]);
  }

  renderImage(image: string) {
    const endIndex = image.indexOf('{width}x{height}.jpg');
    if (endIndex !== -1) {
      return `${image.substr(0, endIndex)}100x100.jpg`;
    }
    return image;
  }
}
