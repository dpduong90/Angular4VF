import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerartistComponent } from './bannerartist.component';

describe('BannerartistComponent', () => {
  let component: BannerartistComponent;
  let fixture: ComponentFixture<BannerartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
