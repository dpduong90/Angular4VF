import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouter } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  imports: [
    CommonModule,
    homeRouter
  ],
  declarations: [HomePageComponent]
})
export class HomePageModule { }
