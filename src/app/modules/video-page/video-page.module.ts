import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { videoRouter } from './video-page-routing.module';
import { VideoPageComponent } from './video-page.component';

@NgModule({
  imports: [
    CommonModule,
    videoRouter
  ],
  declarations: [VideoPageComponent]
})
export class VideoPageModule { }
