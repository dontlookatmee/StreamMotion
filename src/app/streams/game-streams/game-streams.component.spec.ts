import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStreamsComponent } from './game-streams.component';

describe('GameStreamsComponent', () => {
  let component: GameStreamsComponent;
  let fixture: ComponentFixture<GameStreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameStreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameStreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
