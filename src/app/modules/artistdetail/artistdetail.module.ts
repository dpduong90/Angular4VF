import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistdetailComponent } from './artistdetail.component';
import { ArtistdetailRouter } from './artistdetail-routing.module';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';

@NgModule({
  imports: [
    CommonModule,    
    ArtistdetailRouter,
    SharedComponentsModule
  ],
  declarations: [
    ArtistdetailComponent
  ]
})
export class ArtistdetailModule { }
