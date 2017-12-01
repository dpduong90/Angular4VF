import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouter } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';
@NgModule({
  imports: [
    CommonModule,
    homeRouter,
    SharedComponentsModule
  ],
  declarations: [
    HomePageComponent,
    
  ]
})
export class HomePageModule { }
