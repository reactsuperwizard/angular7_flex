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
      maxHeight: '100vh',
      maxWidth: '100vw',
      data: {
        info:this.sel_bus,
        dlg: this.dialog
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
