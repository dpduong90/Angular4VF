import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgePageComponent } from './knowledge-page.component';

const KNOWLEDGE_ROUTER: Routes = [
  {
    path: '',
    component: KnowledgePageComponent
  }
];

export const knowledgeRouter = RouterModule.forChild(KNOWLEDGE_ROUTER);
