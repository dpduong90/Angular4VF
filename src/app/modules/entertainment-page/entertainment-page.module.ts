import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { entertainmentRouter } from './entertainment-page-routing.module';
import { EntertainmentPageComponent } from './entertainment-page.component';
//import { PlaylistitemComponent } from "../../shared/components/items/playlistitem/playlistitem.component";
// import { SplaylistSlideComponent } from "../../shared/components/section/splaylist-slide/splaylist-slide.component";

@NgModule({
  imports: [
    CommonModule,
    entertainmentRouter
  ],
  declarations: [
    EntertainmentPageComponent,
    //PlaylistitemComponent
    // SplaylistSlideComponent
  ]
})
export class EntertainmentPageModule { }
