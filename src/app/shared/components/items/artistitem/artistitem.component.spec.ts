import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistitemComponent } from './artistitem.component';

describe('ArtistitemComponent', () => {
  let component: ArtistitemComponent;
  let fixture: ComponentFixture<ArtistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
