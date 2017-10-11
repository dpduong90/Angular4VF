import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-suggestvideo',
  templateUrl: './suggestvideo.component.html',
  styleUrls: ['./suggestvideo.component.scss']
})
export class SuggestvideoComponent implements OnInit {
  results: string[];
  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    let url = 'http://local.videofly.vn:7277/api/video';

    this.http.get(url, {
      params: new HttpParams().set('video_id', '570442892623084701')
    }).subscribe(data => console.log(data));
  }
}
