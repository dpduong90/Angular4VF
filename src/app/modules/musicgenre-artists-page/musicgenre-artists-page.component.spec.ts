import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicgenreArtistsPageComponent } from './musicgenre-artists-page.component';

describe('MusicgenreArtistsPageComponent', () => {
  let component: MusicgenreArtistsPageComponent;
  let fixture: ComponentFixture<MusicgenreArtistsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicgenreArtistsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicgenreArtistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
