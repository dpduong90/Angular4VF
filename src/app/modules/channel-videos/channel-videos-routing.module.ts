import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelVideosComponent } from './channel-videos.component';

const CHANNELVIDEOS_ROUTER: Routes = [
  {
    path: '',
    component: ChannelVideosComponent
  }
];

export const  ChannelVideosRouter = RouterModule.forChild(CHANNELVIDEOS_ROUTER);