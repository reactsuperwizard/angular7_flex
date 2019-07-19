import {Component, Inject} from '@angular/core';
import { TravelBusElement } from 'src/app/data/Order.type';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-detail-dialog',
  template: `
          
    <div mat-dialog-title class="dialog-title">
      <p class="dialog-title-p">Passenger: {{data.name}}</p>
      <button class="dialog-title-button" mat-icon-button aria-label="Example"><i class="material-icons">cancel</i></button>
    </div>
    <div mat-dialog-content class="dialgo-content">      
      <app-detail-pan [information]='busInformation'></app-detail-pan>
      <mat-tab-group>
        <mat-tab *ngFor="let tab of tabInformation" label="{{tab.tabname}}">                             
          <div *ngIf="tab?.tabInfo && tab.tabInfo.length>0">          
            <app-detail-pan *ngFor="let inFoBlock of tab.tabInfo" [information]='inFoBlock'></app-detail-pan>
          </div>
        </mat-tab>        
    </mat-tab-group>
    </div>
    
  `,
  styles: [`
    .common-info {

    }
    .dialog-title {
      margin: -24px -24px 0px -24px;
      padding: 12px 8px 10px 24px;
      background: #887972;
      color : #ffffff;
    }
    .dialog-title>p {
      display: inline;      
      font-family : 'Didact Gothic';
    }
    .dialog-title>button {
      float: right;
      margin:-10px -3px;
      color: burlywood;
    }
    .dialgo-content {
      border: 4px #887972 solid;
      min-height: 200px;
      margin-bottom: -24px;
    }
  `]
})
export class DetailDialogComponent{
  
  
  
  busInformation:any = {
    title:'Bus Details',
    icon: 'pan_tool',
    detail:[
    {
      data:[
        {name:'Bus No', value: '01'},
        {name:'Seat No', value: '35k'}
      ],
      width:45    
    },
    {
      data:[
        {name:'Bus Date', value: '17/06/2013'},
        {name:'Record Locator', value: ''}
      ],
      width:35    
    },
    {
      data:[
        {name:'Departure', value: '01'},
        {name:'Arrival', value: '35k'}
      ],
      width:30    
    }
  ]
};
tabInformation:any = [{
    tabname:'Passenger Info',
    tabInfo:[{
        title:'Passenger Details',
        icon: 'person',
        detail:[{
          data:[
            {name:'Passenger Name', value: 'Mohamed Bahaa eldin Mohamed'},
            {name:'Infant Name', value: 'N/A'},
            {name:'Seat No', value: '35K'},
            {name:'Group Code', value: '5fs6'},
          ],
          width:50
          },
          {
            data:[
              {name:'Ticket Number', value: 'K12312345'},
              {name:'Infant Name', value: 'Record Locator'},
              {name:'Compartment', value: ''},
              {name:'Gender', value: 'Male'},
            ],
            width:50
          }
        ] 
      },
      {
        title:'Passenger Details',
        icon: 'description',
        detail:[{
          data:[
            {name:'Family Name', value: ''},
            {name:'Middle Name', value: ''},
            {name:'Expired Date', value: '25/09/2019'},
            {name:'Contact Details', value: ''},            
          ],
          width:50
          },
          {
            data:[
              {name:'First Name', value: ''},
              {name:'No', value: ''},
              {name:'Date of Birth', value: '25/09/2019'},
              {name:'Gender', value: 'Male'},            
            ],
            width:50
          }
        ] 
      },
      {
        title:'Baggage Details',
        icon: 'card_travel',
        detail:[{
          data:[
            {name:'No of Pieces', value: '2'},
            {name:'Tag ID', value: '564'},
          ],
          width:50
          },
          {
            data:[
              {name:'Weight', value: '85KG'},
            ],
            width:50
          }
        ] 
      }
    ]
  },
  {
    tabname:'Connection Info'    
  },
  {
    tabname:'Booking Details'    
  },
  {
    tabname:'Services Info'    
  }
]

constructor(
  public dialogRef: MatDialogRef<DetailDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: TravelBusElement) {}

onNoClick(): void {
  this.dialogRef.close();
}

}
