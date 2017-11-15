import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgePageComponent } from './knowledge-page.component';
import { knowledgeRouter } from './knowledge-page-routing.module';
@NgModule({
  imports: [
    CommonModule,
    knowledgeRouter
  ],
  declarations: [KnowledgePageComponent]
})
export class KnowledgePageModule { }
