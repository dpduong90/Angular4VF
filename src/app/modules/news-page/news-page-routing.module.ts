import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './news-page.component';

const NEWS_ROUTER: Routes = [
  {
    path: '',
    component: NewsPageComponent
  }
];

export const newsRouter = RouterModule.forChild(NEWS_ROUTER);
