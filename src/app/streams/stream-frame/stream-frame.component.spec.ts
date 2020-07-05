import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamFrameComponent } from './stream-frame.component';

describe('StreamFrameComponent', () => {
  let component: StreamFrameComponent;
  let fixture: ComponentFixture<StreamFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
