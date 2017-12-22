import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenrePlaylistsRouter } from './musicgenre-playlists-page-routing.module';
import { MusicgenrePlaylistsPageComponent } from './musicgenre-playlists-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    GenrePlaylistsRouter,
    SharedComponentsModule
  ],
  declarations: [MusicgenrePlaylistsPageComponent]
})
export class MusicgenrePlaylistsPageModule { }
