import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestvideoComponent } from './suggestvideo.component';

describe('SuggestvideoComponent', () => {
  let component: SuggestvideoComponent;
  let fixture: ComponentFixture<SuggestvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
