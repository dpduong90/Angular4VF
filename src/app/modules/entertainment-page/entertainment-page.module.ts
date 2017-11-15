import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { entertainmentRouter } from './entertainment-page-routing.module';
import { EntertainmentPageComponent } from './entertainment-page.component';

@NgModule({
  imports: [
    CommonModule,
    entertainmentRouter
  ],
  declarations: [EntertainmentPageComponent]
})
export class EntertainmentPageModule { }
