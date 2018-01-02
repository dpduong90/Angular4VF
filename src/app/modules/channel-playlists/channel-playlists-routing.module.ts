import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChannelPlaylistsComponent } from './channel-playlists.component';

const CHANNELPLAYLISTS_ROUTER: Routes = [
  {
    path: '',
    component: ChannelPlaylistsComponent
  }
];

export const  ChannelPlaylistsRouter = RouterModule.forChild(CHANNELPLAYLISTS_ROUTER);