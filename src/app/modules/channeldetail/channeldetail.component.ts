import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-channeldetail',
  templateUrl: './channeldetail.component.html',
  styleUrls: ['./channeldetail.component.scss']
})
export class ChanneldetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    // video slider

    $('.videoslider').bxSlider({
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 196,
      slideMargin: 0,
      auto: false,
      speed: 1000,
      moveSlides: 4,
      infiniteLoop: true
    });
  }

}
