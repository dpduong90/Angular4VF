import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelVideosRouter } from './channel-videos-routing.module';
import { ChannelVideosComponent } from './channel-videos.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    ChannelVideosRouter,
    SharedComponentsModule
  ],
  declarations: [ChannelVideosComponent]
})
export class ChannelVideosModule { }
