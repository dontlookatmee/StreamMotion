import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
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
}
