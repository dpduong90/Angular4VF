import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplaylistSlideComponent } from './splaylist-slide.component';

describe('SplaylistSlideComponent', () => {
  let component: SplaylistSlideComponent;
  let fixture: ComponentFixture<SplaylistSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplaylistSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplaylistSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
