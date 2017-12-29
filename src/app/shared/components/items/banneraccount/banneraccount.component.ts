import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-banneraccount',
  templateUrl: './banneraccount.component.html',
  styleUrls: ['./banneraccount.component.scss']
})
export class BanneraccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //for menu channel tab
    $(".vf-menu-channel button").click(function()
    {
      $(".vf-menu-channel input").css("width", "135px");
    });
  }

}
