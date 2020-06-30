import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input('type') type: string;
  @Input('text') text: string;
  @Input('link') link: string;

  constructor() {}

  ngOnInit(): void {}
}
