import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvideoSlideComponent } from './svideo-slide.component';

describe('SvideoSlideComponent', () => {
  let component: SvideoSlideComponent;
  let fixture: ComponentFixture<SvideoSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvideoSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvideoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
