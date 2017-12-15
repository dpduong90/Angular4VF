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

    // show info artist detail
   function showInfArtist()
   {
     var wthumb = $('.wrap-thumbitems .thumbitem').width();
     $('.thumbitem').css('height', wthumb);

     $(window).resize(function(event) {
       var wthumb = $('.wrap-thumbitems .thumbitem').width();
       $('.thumbitem').css('height', wthumb);
     });

     $('.readmore a').click(function()
     {						
       $('.intro-box .sort-desc').toggleClass("full");	
       return false;
       
     });

     $('.readmore a').bind('click', function(){
       if($('.wrap-bannerinner .sort-desc').hasClass("full"))				
         {
           $(".wrap-bannerinner .sort-desc").removeClass('unscroll');
           
           $(".wrap-bannerinner .sort-desc").mCustomScrollbar({
             autoHideScrollbar:true,															
             theme:"rounded"
           });
         }
       else 
       {
         $(".wrap-bannerinner .sort-desc").addClass('unscroll');
         
       }	
       
     });
     
   
   }

   showInfArtist();

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
