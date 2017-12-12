import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenredetailComponent } from './genredetail.component';
import { genredetailRouter } from './genredetail-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,
    genredetailRouter,
    SharedComponentsModule
    
  ],
  declarations: [
    GenredetailComponent
  ]
})
export class GenredetailModule { }
