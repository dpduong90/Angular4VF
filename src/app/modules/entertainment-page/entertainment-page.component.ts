import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(' .playlistslider').bxSlider({
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 196,
      slideMargin: 0,
      auto: false,
      speed: 3000,
      moveSlides: 4,
      infiniteLoop: true
    });

    $(' .videoslider').bxSlider({
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
