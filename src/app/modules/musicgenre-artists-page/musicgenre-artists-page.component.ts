import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-musicgenre-artists-page',
  templateUrl: './musicgenre-artists-page.component.html',
  styleUrls: ['./musicgenre-artists-page.component.scss']
})
export class MusicgenreArtistsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {  
   

   // for select artist order
    // $('.sapxep select').on("change", function(){
    //   window.location.href = $(this).val();
    // });	

  }

}
