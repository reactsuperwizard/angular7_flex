import {Component, Inject, Input} from '@angular/core';
import { TravelBusElement } from 'src/app/data/Order.type';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-detail-pan',
  template: `       
      <mat-list *ngIf="information && information.title">

        <div  class="common-info" *ngIf="!isCardBlock">
          <mat-card-header>  
            <div mat-card-avatar>        
              <i *ngIf="information.icon" class="material-icons">{{information.icon}}</i>        
            </div>
            <mat-card-title>{{information.title}}</mat-card-title>
          </mat-card-header> 
          <div *ngIf="information?.detail && information.detail.length>0" mat-card-content class="info-content">
            <div *ngFor="let row of information.detail" fxFlex="row.width">          
              <p *ngFor="let cell of row.data"> <span fxFlex="46">{{cell.name}}</span><span fxFlex="8">:</span> <span>{{cell.value}}</span></p>
            </div>          
          </div>
        </div>
        <mat-card  class="common-info" *ngIf="isCardBlock" class="block_color">
          <mat-card-header>  
            <div mat-card-avatar>        
              <i *ngIf="information.icon" class="material-icons">{{information.icon}}</i>        
            </div>
            <mat-card-title>{{information.title}}</mat-card-title>
          </mat-card-header> 
          <div *ngIf="information?.detail && information.detail.length>0" mat-card-content class="info-content">
            <div *ngFor="let row of information.detail" fxFlex="row.width">          
              <p *ngFor="let cell of row.data"> <span fxFlex="46">{{cell.name}}</span><span fxFlex="8">:</span> <span>{{cell.value}}</span></p>
            </div>          
          </div>
        </mat-card>
        <mat-divider *ngIf="!last"></mat-divider>
      </mat-list>
  `,
  styles: [`  
    .mat-card-avatar {
      color: #433426;
      height: fit-content;
    }
    .block_color{
      background: #f5f2ed
    }
    
    .common-info {
      font-family : 'Didact Gothic';
      padding: 10px 24px;
    }
    .mat-card-title {
      margin-bottom:5px;
      color: #dd454c; 
    }
    .info-content {
      font-size: 13px;
    }
    .info-content>div>p{
      margin: 5px;
    }
  `]
})
export class SubDetailPanComponent{
  
  @Input()
  information:any; 
  @Input()
  isCardBlock:Boolean; 
  
}
