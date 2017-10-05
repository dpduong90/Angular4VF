import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Http, RequestOptions, RequestMethod, Headers, URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-suggestvideo',
  templateUrl: './suggestvideo.component.html',
  styleUrls: ['./suggestvideo.component.scss']
})
export class SuggestvideoComponent implements OnInit {
  results: string[];
  constructor(private http: Http) {
    
  }

  ngOnInit() {
    let url = 'http://192.168.11.18:7177/api/nextvideoinplaylist';
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json; charset=UTF-8');    
    let myParams = new URLSearchParams();
    myParams.append('playlist', '464107518177651604');
    let options = new RequestOptions({ 
      params: myParams,
      headers: myHeaders
    });

    this.http.get(url, options).subscribe(data => {
        console.log(data);
    });
  }
}
