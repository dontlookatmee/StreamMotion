import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMotionComponent } from './about-motion.component';

describe('AboutMotionComponent', () => {
  let component: AboutMotionComponent;
  let fixture: ComponentFixture<AboutMotionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutMotionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
