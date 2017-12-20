import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannergenreComponent } from './bannergenre.component';

describe('BannergenreComponent', () => {
  let component: BannergenreComponent;
  let fixture: ComponentFixture<BannergenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannergenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannergenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
