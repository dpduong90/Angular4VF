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
    // $('#home-page .bxslider').bxSlider({
    //   minSlides: 1,
    //   maxSlides: 6,
    //   slideWidth: 196,
    //   slideMargin: 12,
    //   auto: false,
    //   speed: 3000,
    //   moveSlides: 4,
    //   // infiniteLoop: true
    // });

    //  $('.category-slider').bxSlider({  
    //   speed: 500, 
    //   mode: 'fade',
    //   auto:true,  
    //   easing:'linear',
    //   infiniteLoop: true
    // });

  }

}
