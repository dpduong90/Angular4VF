import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import { newsRouter } from './news-page-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    newsRouter,
    SharedComponentsModule
  ],
  declarations: [NewsPageComponent]
})
export class NewsPageModule { }
