import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {
  TravelBusElement,
  ELEMENT_DATA
} from '../../data/Order.type'


@Component({
  selector: 'app-mainpage',
  template: `
    <app-main-search></app-main-search>
    <app-main-searchresult></app-main-searchresult>
  
  
  `,
  styles: [`
  
    .mainpage-full-width {
      width: 100%;
    }
    .mainpage-card-div {
      margin: 50px 30px; 
    }

    .mainpage-card {
      min-width: 600px;
      max-width: 1200px;
      padding: 0px;
      background: #f5f2ed;
    }

    .mainpage-title {
      height: inherit;
      margin: 12px 12px;
      font-weight: bold;
      color: #e7e4d7;
    }

    .mainpage-card-content {    
      padding: 15px 20px 0px 20px;
    }   
    .mainpage-card-actions {    
      padding: 15px 20px 20px 0px;
      padding-bottom: 15px !important;
    }   
    .mainpage-card-header {
      background-image: linear-gradient(#ac9b96,#78655B,#78655B);
    }
    .mainpage-90-width {
      padding: 0 10px
    }
    
  `]
})
export class MainPageComponent implements OnInit {
  
  
  ngOnInit(): void {
    
  } 
}
