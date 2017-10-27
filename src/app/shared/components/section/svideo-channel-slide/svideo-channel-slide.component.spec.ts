import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvideoChannelSlideComponent } from './svideo-channel-slide.component';

describe('SvideoChannelSlideComponent', () => {
  let component: SvideoChannelSlideComponent;
  let fixture: ComponentFixture<SvideoChannelSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvideoChannelSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvideoChannelSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
