import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamsAllComponent } from './streams-all.component';

describe('StreamsAllComponent', () => {
  let component: StreamsAllComponent;
  let fixture: ComponentFixture<StreamsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
