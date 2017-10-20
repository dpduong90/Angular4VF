import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Video } from '../model/Video';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VideoService {
  videoDetail: Video;
  constructor(private http: HttpClient) {
    
  }

  getVideoDetail(id: string) {
    
    // return this.http.get(url, {
    //   params: new HttpParams().set('video_id', id)
    // }).map(data => {
    //   return <Video>data["data"].video;
    // });
    let promise = new Promise((resolve, reject) => {
      let url = 'http://local.videofly.vn:7277/api/video';
      this.http.get(url, {
        params: new HttpParams().set('video_id', id)
      }).toPromise()
      .then(data => {
        this.videoDetail = <Video>data["data"].video;
        resolve();
      }, msg => {
        reject(msg);
      })
    });
    return promise;
  }

}
