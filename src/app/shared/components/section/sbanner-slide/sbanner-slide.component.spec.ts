import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbannerSlideComponent } from './sbanner-slide.component';

describe('SbannerSlideComponent', () => {
  let component: SbannerSlideComponent;
  let fixture: ComponentFixture<SbannerSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbannerSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbannerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
