import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['data-table.component.css']
})
export class DataTableComponent implements OnInit {

   private _data:Array<any>=[];
   @Input()
    set data(data: Array<any>) {
        this._data = data;
    }
    get data():Array<any> {
        return this._data;
    }
  public rows:Array<any> = [];
  public columns:Array<any> = [
    {
      title: 'Name', 
      name: 'name', 
      filtering: {filterString: '', placeholder: 'Filter by name'}
    },
    {
      title: 'Position',
      name: 'position',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {
      title: 'Office', 
      className: ['office-header', 'text-success'],
      name: 'office', 
      sort: 'asc'
    },
    {
      title: 'Extn.', 
      name: 'ext', 
      sort: '', 
      filtering: {filterString: '', placeholder: 'Filter by extn.'}
    },
    {
      title: 'Start date', 
      className: 'text-warning', 
      name: 'startDate'
    },
    {
      title: 'Salary ($)', 
      name: 'salary'
    }
  ];
  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };

  // private data:Array<any> = [{
  //     name:'Meg',
  //     position: 'Position 1',
  //     office: 'Office 1',
  //     ext:'0891',
  //     startDate:'2017/05/22',
  //     salary:'1000'
  //   },{
  //     name:'Jo',
  //     position: 'Position 2',
  //     office: 'Office 2',
  //     ext:'0891',
  //     startDate:'2017/05/22',
  //     salary:'2000'
  //   },{
  //     name:'Beth',
  //     position: 'Position 3',
  //     office: 'Office 3',
  //     ext:'0891',
  //     startDate:'2017/05/22',
  //     salary:'3000'
  //   },{
  //     name:'Amy',
  //     position: 'Position 4',
  //     office: 'Office 4',
  //     ext:'0891',
  //     startDate:'2017/05/22',
  //     salary:'4000'
  //   },{
  //     name:'Hannah',
  //     position: 'Position 5',
  //     office: 'Office 5',
  //     ext:'0891',
  //     startDate:'2017/05/22',
  //     salary:'5000'
  //   }];
   public constructor() {
     console.log('In constructor111:',this._data);
     this.length = this._data.length;
    }

   public ngOnInit():void {
     console.log('In constructor123:',this._data);
   this.onChangeTable(this.config);
  }
   public changePage(page:any, data:Array<any> = this._data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  /**
   * Change sort
   */
   public changeSort(data:any, config:any):any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }
     if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  /**
   * Change Filter
   */

   public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

   public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this._data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
  }

}
