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

     $('.readmore a').click(function()
     {
        $(this).toggleClass("active");							
          $('.biography-art .sort-desc').toggleClass("full");														

          return false;
     });

     $('.wrap-aboutartist .readmore a').bind('click', function(){
        if($('.wrap-aboutartist .sort-desc').hasClass("full"))				
          {
            $(".wrap-aboutartist .sort-desc").removeClass('unscroll');
            
            $(".wrap-aboutartist .sort-desc").mCustomScrollbar({
              autoHideScrollbar:true,															
              theme:"rounded"
            });
          }
        else 
        {
          $(".wrap-aboutartist .sort-desc").addClass('unscroll');
          
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
