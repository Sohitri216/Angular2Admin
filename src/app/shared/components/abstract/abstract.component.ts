import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { AppConfig } from '../../config/config';

@Component({
  selector: 'app-abstract',
  templateUrl: './abstract.component.html',
  styleUrls: ['./abstract.component.css']
})
export class AbstractComponent implements OnInit {
	private sideMenuItems:any;
  private currentDate:any;
  constructor(private router: Router) { 

  }

  ngOnInit() {
  	this.sideMenuItems=AppConfig;
  	console.log('Side Menu:',this.sideMenuItems.sideMenu);
    // for (let each of this.sideMenuItems.sideMenu) {
    //   console.log('Each Item:',each);

    // }

    this.currentDate=new Date();
    console.log('Current Date:',this.currentDate);

  }

  goToLink(item){

  	console.log('In click:',item.link);
  	this.router.navigateByUrl(item.link);
  }
  logout(){
      // window.localStorage.setItem('loginCreds',JSON.stringify({}));
      this.router.navigateByUrl('/login');
  }
}
