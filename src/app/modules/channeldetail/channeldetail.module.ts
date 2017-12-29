import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChanneldetailRouter } from './channeldetail-routing.module';
import { ChanneldetailComponent } from './channeldetail.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    ChanneldetailRouter,
    SharedComponentsModule
  ],
  declarations: [ChanneldetailComponent]
})
export class ChanneldetailModule { }
