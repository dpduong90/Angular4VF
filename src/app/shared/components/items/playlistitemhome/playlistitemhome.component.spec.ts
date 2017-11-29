import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistitemhomeComponent } from './playlistitemhome.component';

describe('PlaylistitemhomeComponent', () => {
  let component: PlaylistitemhomeComponent;
  let fixture: ComponentFixture<PlaylistitemhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistitemhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistitemhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
