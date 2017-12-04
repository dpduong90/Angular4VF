import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-sbanner-slide',
  templateUrl: './sbanner-slide.component.html',
  styleUrls: ['./sbanner-slide.component.scss']
})
export class SbannerSlideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.banner-slider').bxSlider({  
      speed: 800, 
      mode: 'fade',
      auto:true,  
      easing:'linear',
      infiniteLoop: true
    });
  }

}
