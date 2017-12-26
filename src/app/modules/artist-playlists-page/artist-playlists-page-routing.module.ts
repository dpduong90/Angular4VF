import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistPlaylistsPageComponent } from './artist-playlists-page.component';

const ARTISTPLAYLISTS_ROUTER: Routes = [
  {
    path: '',
    component: ArtistPlaylistsPageComponent
  }
];

export const ArtistPlaylistsRouter = RouterModule.forChild( ARTISTPLAYLISTS_ROUTER);
