import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicgenreBdartistsPageComponent } from './musicgenre-bdartists-page.component';

const MUSICGENREBDARTISTS_ROUTER: Routes = [
  {
    path: '',
    component: MusicgenreBdartistsPageComponent
  }
];

export const MusicgenreartistsRouter = RouterModule.forChild(MUSICGENREBDARTISTS_ROUTER);
