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
  SbannerSlideComponent
  
 } from './section/index';
  import { PlaylistitemComponent, VideoitemComponent, GenreitemComponent, PlaylistitemhomeComponent} from './items/index';
// import { SbannerSlideComponent } from './section/sbanner-slide/sbanner-slide.component';

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
    SbannerSlideComponent
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
    CommonModule 
  ]
})
export class SharedComponentsModule { }
