import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KnowledgePageComponent } from './knowledge-page.component';
import { knowledgeRouter } from './knowledge-page-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    knowledgeRouter,
    SharedComponentsModule
  ],
  declarations: [KnowledgePageComponent]
})
export class KnowledgePageModule { }
