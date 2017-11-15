import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntertainmentPageComponent } from './entertainment-page.component'
const ENTERTAINMENT_ROUTER: Routes = [
  {
    path: '',
    component: EntertainmentPageComponent
  }
];

export const entertainmentRouter = RouterModule.forChild(ENTERTAINMENT_ROUTER);

