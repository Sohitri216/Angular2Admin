import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private orderSummary:any;
  private paymentSummary:any;
  constructor() { 
}

  ngOnInit() {

  	this.orderSummary={
  		totalOrders:129,
  		newOrders:122,
  		completedOrders:100
  	}

  	this.paymentSummary={
  		revenueCash:1038.220,
  		revenueCard:3050.000,
  		totalRevenue:4088.220
  	}


  	}
  }


