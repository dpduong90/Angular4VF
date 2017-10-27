import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoitemComponent } from './videoitem.component';

describe('VideoitemComponent', () => {
  let component: VideoitemComponent;
  let fixture: ComponentFixture<VideoitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
