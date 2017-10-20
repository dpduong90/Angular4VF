import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvideoComponent } from './svideo.component';

describe('SvideoComponent', () => {
  let component: SvideoComponent;
  let fixture: ComponentFixture<SvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
