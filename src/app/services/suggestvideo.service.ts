import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Video } from '../model/Video';

@Injectable()
export class SuggestvideoService {
  listVideos: Video[];
  constructor(private http: HttpClient) {

  }

  getVideosFavorites(videoId: string) { // function that makes a request and returns a promise
    var baseUrlSuggest = 'http://local.videofly.vn:7277/api/suggestvideo';
    return this.http.get(baseUrlSuggest, {
      params: new HttpParams().set('video_id', videoId)
    }).map(data => {
      console.log('suggest videos: ' + data["data"].videos);
      this.listVideos = data["data"].videos;
      return this.listVideos;
    });
  };
}
