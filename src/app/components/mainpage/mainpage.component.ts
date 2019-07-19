import {Component, OnInit, ViewChild} from '@angular/core';
import {
  TravelBusElement,
  ELEMENT_DATA
} from '../../data/Order.type'
import { MatDialog } from '@angular/material';
import { DetailDialogComponent } from './childcomponent/detaildialog.component';


@Component({
  selector: 'app-mainpage',
  template: `
    <app-main-search></app-main-search>
    <app-main-searchresult (openDialog)='openDialog($event)'></app-main-searchresult>    
  
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
  private sel_bus:TravelBusElement = ELEMENT_DATA[0];
  
  
  
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {    
  } 
  
  openDialog(dialogdata:TravelBusElement): void {
    
    const dialogRef = this.dialog.open(DetailDialogComponent, {
      width: '800px',
      data: this.sel_bus
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
