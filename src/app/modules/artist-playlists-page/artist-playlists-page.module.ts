import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistPlaylistsPageComponent } from './artist-playlists-page.component';
import { ArtistPlaylistsRouter } from './artist-playlists-page-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    ArtistPlaylistsRouter,
    SharedComponentsModule
  ],
  declarations: [
    ArtistPlaylistsPageComponent
  ]
})
export class ArtistPlaylistsPageModule { }
