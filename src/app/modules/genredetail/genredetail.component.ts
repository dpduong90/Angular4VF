import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-genredetail',
  templateUrl: './genredetail.component.html',
  styleUrls: ['./genredetail.component.scss']
})
export class GenredetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(' .playlistslider').bxSlider({
      minSlides: 1,
      maxSlides: 6,
      slideWidth: 196,
      slideMargin: 0,
      auto: false,
      speed: 1000,
      moveSlides: 4,
      infiniteLoop: true
    });

    $(' .artistslider').bxSlider({
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
