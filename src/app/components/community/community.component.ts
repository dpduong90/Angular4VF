import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  Arr = Array;
  num:number = 12;
  constructor() { }

  ngOnInit() {
  }

}
