import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { musicRouter } from './music-page-routing.module';
import { MusicPageComponent } from './music-page.component'

@NgModule({
  imports: [
    CommonModule,
    musicRouter
  ],
  declarations: [MusicPageComponent]
})
export class MusicPageModule { }
