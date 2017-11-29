import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homeRouter } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { VideoitemComponent } from "../../shared/components/items/videoitem/videoitem.component";
import { PlaylistitemComponent } from "../../shared/components/items/playlistitem/playlistitem.component";
//import { SplaylistComponent } from "../../shared/components/section/splaylist/splaylist.component";
@NgModule({
  imports: [
    CommonModule,
    homeRouter
  ],
  declarations: [
    HomePageComponent,
    VideoitemComponent,
    PlaylistitemComponent
    
    
  ]
})
export class HomePageModule { }
