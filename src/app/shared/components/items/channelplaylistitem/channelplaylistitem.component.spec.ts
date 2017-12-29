import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelplaylistitemComponent } from './channelplaylistitem.component';

describe('ChannelplaylistitemComponent', () => {
  let component: ChannelplaylistitemComponent;
  let fixture: ComponentFixture<ChannelplaylistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelplaylistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelplaylistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
