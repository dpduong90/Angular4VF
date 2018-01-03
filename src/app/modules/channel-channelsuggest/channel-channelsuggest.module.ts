import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelChannelsuggestRouter } from './channel-channelsuggest-routing.module';
import { ChannelChannelsuggestComponent } from './channel-channelsuggest.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    ChannelChannelsuggestRouter,
    SharedComponentsModule
  ],
  declarations: [ChannelChannelsuggestComponent]
})
export class ChannelChannelsuggestModule { }
