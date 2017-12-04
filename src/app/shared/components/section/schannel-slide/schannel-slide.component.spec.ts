import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchannelSlideComponent } from './schannel-slide.component';

describe('SchannelSlideComponent', () => {
  let component: SchannelSlideComponent;
  let fixture: ComponentFixture<SchannelSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchannelSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchannelSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
