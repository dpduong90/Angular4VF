import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionchannelComponent } from './subscriptionchannel.component';

describe('SubscriptionchannelComponent', () => {
  let component: SubscriptionchannelComponent;
  let fixture: ComponentFixture<SubscriptionchannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionchannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionchannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
