import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './search-page.component';

const SEARCH_ROUTER: Routes = [
  {
    path: '',
    component: SearchPageComponent
  }
];

export const Searchrouter = RouterModule.forChild(SEARCH_ROUTER);
