import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';

const ROUTER_SEARCH: Routes = [
  {
    path: '',
    component: SearchComponent
  }
];

export const searchRouter = RouterModule.forChild(ROUTER_SEARCH);
