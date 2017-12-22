import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-artistdetail',
  templateUrl: './artistdetail.component.html',
  styleUrls: ['./artistdetail.component.scss']
})
export class ArtistdetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   
   // playlist slider

    $('.playlistslider').bxSlider({
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
