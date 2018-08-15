import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isBit: boolean;
  count: number = 0;

  constructor(private router: Router) {
    
    console.log("Construction created for sidebar");
   }

  ngOnInit() {
  }

}
