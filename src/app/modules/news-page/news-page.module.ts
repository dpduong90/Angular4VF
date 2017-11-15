import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page.component';
import { newsRouter } from './news-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    newsRouter
  ],
  declarations: [NewsPageComponent]
})
export class NewsPageModule { }
