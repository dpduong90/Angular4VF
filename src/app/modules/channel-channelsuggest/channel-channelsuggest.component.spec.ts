import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelChannelsuggestComponent } from './channel-channelsuggest.component';

describe('ChannelChannelsuggestComponent', () => {
  let component: ChannelChannelsuggestComponent;
  let fixture: ComponentFixture<ChannelChannelsuggestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelChannelsuggestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelChannelsuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
