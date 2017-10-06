import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

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
    let url = 'http://videofly.vn/api/nextvideoinplaylist';

    this.http.get(url, {
      params: new HttpParams().set('playlist', '464107518177651604')
    }).map(data => _.values(data))
    .do(console.log);
  }
}
