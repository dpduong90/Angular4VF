import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicPageComponent } from './music-page.component'

const MUSIC_ROUTER: Routes = [
  {
    path: '',
    component: MusicPageComponent
  }
];

export const musicRouter = RouterModule.forChild(MUSIC_ROUTER);
