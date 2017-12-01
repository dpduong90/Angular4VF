import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-svideo-slide',
  templateUrl: './svideo-slide.component.html',
  styleUrls: ['./svideo-slide.component.scss']
})
export class SvideoSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(' .bxslider').bxSlider({
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
