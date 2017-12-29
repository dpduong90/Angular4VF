import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanneraccountComponent } from './banneraccount.component';

describe('BanneraccountComponent', () => {
  let component: BanneraccountComponent;
  let fixture: ComponentFixture<BanneraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanneraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanneraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
