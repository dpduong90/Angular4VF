import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Video } from '../model/Video';

@Injectable()
export class VideoService {
  videoDetail: Video;
  constructor(private http: HttpClient) {
    
  }

  getVideoDetail(id: string) {
    let url = 'http://local.videofly.vn:7277/api/video';
    return this.http.get(url, {
      params: new HttpParams().set('video_id', id)
    }).map(data => {
      return <Video>data["data"].video;
    });
      
  }

}
