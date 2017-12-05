import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { musicRouter } from './music-page-routing.module';
import { MusicPageComponent } from './music-page.component';
import { SharedComponentsModule } from '../../shared/components/shared-components.module';


@NgModule({
  imports: [
    CommonModule,
    musicRouter,
    SharedComponentsModule
  ],
  declarations: [MusicPageComponent]
})
export class MusicPageModule { }
