import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { VideoService } from '../../../services/video.service';
import { Video } from '../../../model/Video';
import { User } from '../../../model/User';
import { Catelogory } from '../../../model/Catelogory';
import { DatePipe, NgStyle } from '@angular/common';
declare var jquery:any;
declare var $ :any;
declare var initVideoflyPlayer: any;
declare var videojs: any;

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.scss'],
  providers: [VideoService]
})
export class VideodetailComponent implements OnInit {
  user: User;
  subCategories: Catelogory[];
  videoDetail = new Video(this.user, this.subCategories);
  constructor(private videoServices: VideoService) { 
    // this.videoServices.getVideoDetail('381221311779798465').subscribe(result => {
    //   this.videoDetail = result;
    //   initVideoflyPlayer(this.videoDetail.videoUrl, this.videoDetail.title);
    //   console.log(this.videoDetail.description);
    // });
    this.videoServices.getVideoDetail('381221311779798465');
  }

  ngOnInit() {
    
  }

}
