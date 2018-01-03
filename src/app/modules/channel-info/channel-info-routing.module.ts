import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelInfoComponent } from './channel-info.component';

const CHANNELINFO_ROUTER: Routes = [
  {
    path: '',
    component: ChannelInfoComponent
  }
];

export const  ChannelInfoRouter = RouterModule.forChild(CHANNELINFO_ROUTER);