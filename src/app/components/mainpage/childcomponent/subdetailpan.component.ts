import {Component, Inject, Input} from '@angular/core';
import { TravelBusElement } from 'src/app/data/Order.type';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-detail-pan',
  template: `       
      <mat-card *ngIf="information && information.title" class="common-info">
        <mat-card-header>  
          <div mat-card-avatar>        
            <i *ngIf="information.icon" class="material-icons">{{information.icon}}</i>        
          </div>
          <mat-card-title>{{information.title}}</mat-card-title>
        </mat-card-header> 
        <div *ngIf="information?.detail && information.detail.length>0" mat-card-content>
          <div *ngFor="let row of information.detail" fxFlex="row.width">          
            <p *ngFor="let cell of row.data"> <span fxFlex="46">{{cell.name}}</span><span fxFlex="8">:</span> <span>{{cell.value}}</span></p>
          </div>          
        </div>
      </mat-card>
  `,
  styles: [`  
    .common-info {

    }
  `]
})
export class SubDetailPanComponent{
  
  @Input()
  information:any;  
  
}
