import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelInfoRouter } from './channel-info-routing.module';
import { ChannelInfoComponent } from './channel-info.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
@NgModule({
  imports: [
    CommonModule,
    ChannelInfoRouter,
    SharedComponentsModule
  ],
  declarations: [ChannelInfoComponent]
})
export class ChannelInfoModule { }
