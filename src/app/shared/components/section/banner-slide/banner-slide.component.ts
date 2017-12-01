import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-banner-slide',
  templateUrl: './banner-slide.component.html',
  styleUrls: ['./banner-slide.component.scss']
})
export class BannerSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.category-slider').bxSlider({  
      speed: 800, 
      mode: 'fade',
      auto:true,  
      easing:'linear',
      infiniteLoop: true
    });
  }

}
