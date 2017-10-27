import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreitemComponent } from './genreitem.component';

describe('GenreitemComponent', () => {
  let component: GenreitemComponent;
  let fixture: ComponentFixture<GenreitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
