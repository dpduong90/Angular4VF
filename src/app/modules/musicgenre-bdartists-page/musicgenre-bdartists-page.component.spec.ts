import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicgenreBdartistsPageComponent } from './musicgenre-bdartists-page.component';

describe('MusicgenreBdartistsPageComponent', () => {
  let component: MusicgenreBdartistsPageComponent;
  let fixture: ComponentFixture<MusicgenreBdartistsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicgenreBdartistsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicgenreBdartistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
