import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicgenrePlaylistsPageComponent } from './musicgenre-playlists-page.component';

describe('MusicgenrePlaylistsPageComponent', () => {
  let component: MusicgenrePlaylistsPageComponent;
  let fixture: ComponentFixture<MusicgenrePlaylistsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicgenrePlaylistsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicgenrePlaylistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
