import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicgenrePlaylistsPageComponent } from './musicgenre-playlists-page.component';

const MUSICGENREPLAYLISTS_ROUTER: Routes = [
  {
    path: '',
    component: MusicgenrePlaylistsPageComponent
  }
];

export const GenrePlaylistsRouter = RouterModule.forChild(MUSICGENREPLAYLISTS_ROUTER);