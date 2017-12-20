import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicgenreArtistsPageComponent } from './musicgenre-artists-page.component';

const MUSICGENREARTISTS_ROUTER: Routes = [
  {
    path: '',
    component: MusicgenreArtistsPageComponent
  }
];

export const MusicgenreartistsRouter = RouterModule.forChild(MUSICGENREARTISTS_ROUTER);
