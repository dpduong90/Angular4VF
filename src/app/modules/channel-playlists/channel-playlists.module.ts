import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelPlaylistsRouter } from './channel-playlists-routing.module';
import { ChannelPlaylistsComponent } from './channel-playlists.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    ChannelPlaylistsRouter,
    SharedComponentsModule
  ],
  declarations: [ChannelPlaylistsComponent]
})
export class ChannelPlaylistsModule { }
