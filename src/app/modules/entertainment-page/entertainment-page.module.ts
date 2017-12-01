import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { entertainmentRouter } from './entertainment-page-routing.module';
import { EntertainmentPageComponent } from './entertainment-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
@NgModule({
  imports: [
    CommonModule,
    entertainmentRouter,
    SharedComponentsModule
  ],
  declarations: [
    EntertainmentPageComponent,
  ]
})
export class EntertainmentPageModule { }
