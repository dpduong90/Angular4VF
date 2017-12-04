import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SVideoChannelSlideComponent,
  SchannelComponent,
  SgenreComponent,
  SplaylistComponent,
  SplaylistSlideComponent,
  StopSlideComponent,
  SvideoComponent,
  SvideoSlideComponent,
  SbannerSlideComponent,  
  SchannelSlideComponent
  
 } from './section/index';

  import { PlaylistitemComponent, 
    VideoitemComponent, 
    GenreitemComponent, 
    PlaylistitemhomeComponent, 
    SubscriptionchannelComponent,
    ChannelitemComponent
  } from './items/index';





@NgModule({
  imports: [
    CommonModule
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
    SchannelSlideComponent
    
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
    SchannelSlideComponent
  ]
})
export class SharedComponentsModule { }
