import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SVideoChannelSlideComponent,
  SchannelComponent,
  SgenreComponent,
  SplaylistComponent,
  SplaylistSlideComponent,
  StopSlideComponent,
  SvideoComponent,
  SvideoSlideComponent,
  SbannerSlideComponent,  
  SchannelSlideComponent,
  SartistSlideComponent,
  StrackvideosComponent
  
 } from './section/index';

  import { PlaylistitemComponent, 
    VideoitemComponent, 
    GenreitemComponent, 
    ArtistitemComponent,
    PlaylistitemhomeComponent, 
    SubscriptionchannelComponent,
    ChannelitemComponent,
    SimilarartistitemComponent
  } from './items/index';



@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [ PlaylistitemComponent, 
    VideoitemComponent, 
    GenreitemComponent, 
    PlaylistitemhomeComponent,
    SVideoChannelSlideComponent,
    SchannelComponent,
    SgenreComponent,
    SplaylistComponent,
    SplaylistSlideComponent,
    StopSlideComponent,
    SvideoComponent,
    SvideoSlideComponent,
    SbannerSlideComponent,
    ChannelitemComponent,
    SubscriptionchannelComponent,    
    SchannelSlideComponent,
    ArtistitemComponent, 
    SartistSlideComponent, 
    StrackvideosComponent, 
    SimilarartistitemComponent
    
   ],
  exports: [ PlaylistitemComponent, 
    VideoitemComponent, 
    GenreitemComponent, 
    PlaylistitemhomeComponent,
    SVideoChannelSlideComponent,
    SchannelComponent,
    SgenreComponent,
    SplaylistComponent,
    SplaylistSlideComponent,
    StopSlideComponent,
    SvideoComponent,
    SvideoSlideComponent,
    SbannerSlideComponent,
    CommonModule ,
    SubscriptionchannelComponent,
    ChannelitemComponent,
    SchannelSlideComponent,
    ArtistitemComponent ,
    SartistSlideComponent,
    StrackvideosComponent,
    SimilarartistitemComponent
  ]
})
export class SharedComponentsModule { }
