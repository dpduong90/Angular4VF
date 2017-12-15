import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistdetailComponent } from './artistdetail.component';

const ARTISTDETAIL_ROUTER: Routes = [
  {
    path: '',
    component: ArtistdetailComponent
  }
];

export const ArtistdetailRouter = RouterModule.forChild(ARTISTDETAIL_ROUTER);
