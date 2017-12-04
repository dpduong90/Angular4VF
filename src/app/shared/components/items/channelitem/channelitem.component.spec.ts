import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelitemComponent } from './channelitem.component';

describe('ChannelitemComponent', () => {
  let component: ChannelitemComponent;
  let fixture: ComponentFixture<ChannelitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
