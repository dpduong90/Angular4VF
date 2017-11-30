import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    $('#home-page .bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 6,
    slideWidth: 196,
    slideMargin: 12,
    auto: false,
    speed: 3000,
    moveSlides: 4,
    // infiniteLoop: true
  });

  }

  
  

}
