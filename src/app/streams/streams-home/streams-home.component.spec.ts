import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamsHomeComponent } from './streams-home.component';

describe('StreamsHomeComponent', () => {
  let component: StreamsHomeComponent;
  let fixture: ComponentFixture<StreamsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
