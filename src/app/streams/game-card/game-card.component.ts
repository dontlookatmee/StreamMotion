import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent implements OnInit {
  @Input('name') name: string;
  @Input('image') image: string;
  @Input('id') id: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  redirectToStreams() {
    this.router.navigate(['streams', this.id]);
  }

  editImage(img: string) {
    const cutIndex = img.indexOf('{width}');
    if (cutIndex === -1) {
      return img;
    }
    return img.substr(0, cutIndex) + '100x100.jpg';
  }
}
