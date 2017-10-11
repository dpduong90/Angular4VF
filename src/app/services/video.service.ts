import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Video } from '../model/Video';

@Injectable()
export class VideoService {
  videoDetail: Video;
  constructor(private http: HttpClient) {
    
  }

  getVideoDetail(videoId: string): Video {
    let url = 'http://local.videofly.vn:7277/api/video';
    this.http.get(url, {
      params: new HttpParams().set('video_id', videoId)
    }).subscribe(data => console.log(data));
    return this.videoDetail;
  }

}
