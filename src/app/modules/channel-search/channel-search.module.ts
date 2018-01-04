import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelSearchRouter } from './channel-search-routing.module';
import { ChannelSearchComponent } from './channel-search.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
@NgModule({
  imports: [
    CommonModule,
    ChannelSearchRouter,
    SharedComponentsModule
  ],
  declarations: [ChannelSearchComponent]
})
export class ChannelSearchModule { }
