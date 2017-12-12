import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenredetailComponent } from './genredetail.component';

const GENREDETAIL_ROUTER: Routes = [
  {
    path: '',
    component: GenredetailComponent
  }
];

export const genredetailRouter = RouterModule.forChild(GENREDETAIL_ROUTER);