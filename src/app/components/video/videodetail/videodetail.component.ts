import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
declare var initVideoflyPlayer: any;
declare var videojs: any;

@Component({
  selector: 'app-videodetail',
  templateUrl: './videodetail.component.html',
  styleUrls: ['./videodetail.component.scss']
})
export class VideodetailComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit() {
    //initVideoflyPlayer('www.youtube.com/watch?v=3_8a9R0qJxM', 'Tìm ra đáp án trong 30s ! Bạn là THIÊN TÀI');
  }

}
