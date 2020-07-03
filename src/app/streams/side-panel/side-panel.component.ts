import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent implements OnInit {
  showMoreFavourite: boolean = false;
  showMoreRecommended: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleShowMoreFavourite() {
    this.showMoreFavourite = !this.showMoreFavourite;
  }

  handleShowMoreRecommended() {
    this.showMoreRecommended = !this.showMoreRecommended;
  }
}
