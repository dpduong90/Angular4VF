import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoPageComponent } from './video-page.component';

const VIDEO_ROUTER: Routes = [
  {
    path: '',
    component: VideoPageComponent
  }
];

export const videoRouter = RouterModule.forChild(VIDEO_ROUTER);
