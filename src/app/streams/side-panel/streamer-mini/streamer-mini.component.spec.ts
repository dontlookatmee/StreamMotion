import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamerMiniComponent } from './streamer-mini.component';

describe('StreamerMiniComponent', () => {
  let component: StreamerMiniComponent;
  let fixture: ComponentFixture<StreamerMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamerMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamerMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
