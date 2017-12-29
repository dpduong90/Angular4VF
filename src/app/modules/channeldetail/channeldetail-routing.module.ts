import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChanneldetailComponent } from './channeldetail.component';

const CHANNELDETAIL_ROUTER: Routes = [
  {
    path: '',
    component: ChanneldetailComponent
  }
];

export const  ChanneldetailRouter = RouterModule.forChild(CHANNELDETAIL_ROUTER);