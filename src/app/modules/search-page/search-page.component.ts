import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {   

      $('.searchfiltter button').click(function(){
      $('.filter-result').slideDown(200);
        
      });

      $('.filter-result .choosetab li a').bind('click', function(){						
          $('.list-allresult').hide();			
        });   
  }

}
