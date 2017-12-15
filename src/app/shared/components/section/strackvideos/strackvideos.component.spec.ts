import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrackvideosComponent } from './strackvideos.component';

describe('StrackvideosComponent', () => {
  let component: StrackvideosComponent;
  let fixture: ComponentFixture<StrackvideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrackvideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrackvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
