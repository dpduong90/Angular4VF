import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarartistitemComponent } from './similarartistitem.component';

describe('SimilarartistitemComponent', () => {
  let component: SimilarartistitemComponent;
  let fixture: ComponentFixture<SimilarartistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarartistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarartistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
