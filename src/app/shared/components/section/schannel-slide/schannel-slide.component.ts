import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-schannel-slide',
  templateUrl: './schannel-slide.component.html',
  styleUrls: ['./schannel-slide.component.scss']
})
export class SchannelSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() { 
    $(' .channelslider').bxSlider({
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 196,
      slideMargin: 0,
      auto: false,
      speed: 3000,
      moveSlides: 4,
      infiniteLoop: true
    });
  }
}
