import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-bannergenre',
  templateUrl: './bannergenre.component.html',
  styleUrls: ['./bannergenre.component.scss']
})
export class BannergenreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
       $(this).toggleClass("active");					
       $('.intro-box .sort-desc').toggleClass("full");	
       return false;
       
     });

     $('.readmore a').bind('click', function(){
       if($('.wrap-bannerinner .sort-desc').hasClass("full"))				
         {
           $(".wrap-bannerinner .sort-desc").removeClass('unscroll');
           
           $(".wrap-bannerinner .sort-desc").mCustomScrollbar({
             autoHideScrollbar:true,															
             theme:"rounded" ,
             scrollInertia:5000 ,
             scrollEasing:  "easeInOut"                     
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
