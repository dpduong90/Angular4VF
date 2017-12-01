import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-splaylist-slide',
  templateUrl: './splaylist-slide.component.html',
  styleUrls: ['./splaylist-slide.component.scss']
})
export class SplaylistSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.bxslider').bxSlider({
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 196,
      slideMargin: 0,
      auto: false,
      speed: 3000,
      moveSlides: 4,
      // infiniteLoop: true
    });
  }

}
