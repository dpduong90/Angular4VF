import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelSearchComponent } from './channel-search.component';

const CHANNELSEARCH_ROUTER: Routes = [
  {
    path: '',
    component: ChannelSearchComponent
  }
];

export const  ChannelSearchRouter = RouterModule.forChild(CHANNELSEARCH_ROUTER);