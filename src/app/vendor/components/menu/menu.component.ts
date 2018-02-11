import { Component,Input, OnInit } from '@angular/core';
// import {DataTableComponent} from '../../../shared/components/data-table/data-table.component';
// import { Ng2TableModule } from 'ng2-table/ng2-table';
// import { NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective } from 'ng2-table/ng2-table';
// import { TableData } from './table-data';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	// dataConfig:<Array>any;
	data;
  constructor() { }

  ngOnInit() {
  	this.data=[{
      name:'Meg',
      position: 'Position 1',
      office: 'Office 1',
      ext:'0891',
      startDate:'2017/05/22',
      salary:'1000'
    },{
      name:'Jo',
      position: 'Position 2',
      office: 'Office 2',
      ext:'0891',
      startDate:'2017/05/22',
      salary:'2000'
    },{
      name:'Beth',
      position: 'Position 3',
      office: 'Office 3',
      ext:'0891',
      startDate:'2017/05/22',
      salary:'3000'
    },{
      name:'Amy',
      position: 'Position 4',
      office: 'Office 4',
      ext:'0891',
      startDate:'2017/05/22',
      salary:'4000'
    },{
      name:'Hannah',
      position: 'Position 5',
      office: 'Office 5',
      ext:'0891',
      startDate:'2017/05/22',
      salary:'5000'
    },{
      name:'Simon',
      position: 'Position 6',
      office: 'Office 10',
      ext:'0891',
      startDate:'2017/05/22',
      salary:'60000'
    }];
    // console.log('Data array in Menu:',this.data);
  }

}
