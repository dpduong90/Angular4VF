import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelChannelsuggestComponent } from './channel-channelsuggest.component';

const CHANNELSUGGEST_ROUTER: Routes = [
  {
    path: '',
    component: ChannelChannelsuggestComponent
  }
];

export const  ChannelChannelsuggestRouter = RouterModule.forChild(CHANNELSUGGEST_ROUTER);