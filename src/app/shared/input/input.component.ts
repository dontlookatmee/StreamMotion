import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input('control') control: FormControl;
  @Input('placeholder') placeholder?: string;
  @Input('name') name?: string = '';
  @Input('type') type?: string = 'text';

  constructor() {}

  ngOnInit(): void {}
}
