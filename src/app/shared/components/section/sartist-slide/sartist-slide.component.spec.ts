import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SartistSlideComponent } from './sartist-slide.component';

describe('SartistSlideComponent', () => {
  let component: SartistSlideComponent;
  let fixture: ComponentFixture<SartistSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SartistSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SartistSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
