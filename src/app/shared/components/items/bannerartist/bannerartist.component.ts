import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-bannerartist',
  templateUrl: './bannerartist.component.html',
  styleUrls: ['./bannerartist.component.scss']
})
export class BannerartistComponent implements OnInit {

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
              theme:"rounded",
              scrollInertia:5000 ,
              scrollEasing:  "easeInOut"  
            });
          }
        else 
        {
          $(".wrap-aboutartist .sort-desc").addClass('unscroll');
          
        }	
        
      });
     
   
   }

   showInfArtist();
  }

}
