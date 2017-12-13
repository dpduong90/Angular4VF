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

  // show info genre detail
   function showInfoGenre()
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

    showInfoGenre();

  }

}
