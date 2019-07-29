import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ELEMENT_DATA, TravelBusElement } from 'src/app/data/Order.type';
import { MatSort } from '@angular/material';


@Component({
  selector: 'app-main-searchresult',
  template: `
  <div class="mainpage-card-div">
    <mat-card class="mainpage-card">
      <mat-card-header class="mainpage-card-header">
        <mat-card-title class="mainpage-title"> Search Results for {{condition}} </mat-card-title>
      </mat-card-header>    
      <mat-card-content class="mainpage-card-content">
        <div class="mat-elevation-z8">
          <table mat-table [dataSource]="dataSource" matSort>        
            <!-- seq Column -->
            <ng-container matColumnDef="seq">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> # </th>
              <td mat-cell *matCellDef="let element"> {{element.seq}} </td>
            </ng-container>
        
            <!-- Name Column -->
            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>
              <td mat-cell *matCellDef="let element"> {{element.name}} </td>
            </ng-container>
        
            <!-- busNo Column -->
            <ng-container matColumnDef="busNo">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> Bus No </th>
              <td mat-cell *matCellDef="let element"> {{element.busNo}} </td>
            </ng-container>
        
            <!-- busDate Column -->
            <ng-container matColumnDef="busDate">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> Bus Date </th>
              <td mat-cell *matCellDef="let element"> {{element.busDate}} </td>
            </ng-container>
            
            <!-- stf Column -->
            <ng-container matColumnDef="stf">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> STF </th>
              <td mat-cell *matCellDef="let element"> {{element.stf}} </td>
            </ng-container>
            
            <!-- iDNo Column -->
            <ng-container matColumnDef="iDNo">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> ID No </th>
              <td mat-cell *matCellDef="let element"> {{element.iDNo}} </td>
            </ng-container>
            
            <!-- nationality Column -->
            <ng-container matColumnDef="nationality">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> Nationality </th>
              <td mat-cell *matCellDef="let element"> {{element.nationality}} </td>
            </ng-container>
            
            <!-- seat Column -->
            <ng-container matColumnDef="seat">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> Seat </th>
              <td mat-cell *matCellDef="let element"> {{element.seat}} </td>
            </ng-container>
            
            <!-- grpCode Column -->
            <ng-container matColumnDef="grpCode">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> Grp Code </th>
              <td mat-cell *matCellDef="let element"> {{element.grpCode}} </td>
            </ng-container>
            
            <!-- pNR_Date Column -->
            <ng-container matColumnDef="pNR_Date">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> PNR Date </th>
              <td mat-cell *matCellDef="let element"> {{element.pNR_Date}} </td>
            </ng-container>            
            <!-- checkin Column -->
            <ng-container matColumnDef="checkin">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> Check In </th>
              <td mat-cell *matCellDef="let element"> {{element.checkin}} </td>
            </ng-container>
            
            <!-- dateTime Column -->
            <ng-container matColumnDef="dateTime">
              <th mat-header-cell *matHeaderCellDef mat-sort-header> Date Time </th>
              <td mat-cell *matCellDef="let element"> {{element.dateTime}} </td>
            </ng-container>
        
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;" (click)="onDetailClick(element)"></tr>
          </table>          
          <mat-paginator [pageSizeOptions]="[10, 20, 50]" showFirstLastButtons class="mainpage-paginator"></mat-paginator>
        </div>
      </mat-card-content>      
    </mat-card>
  </div>
  
  
  `,
  styles: [`
    
    .mainpage-full-width {
      width: 100%;
    }
    .mainpage-card-div {
      margin: 50px 30px; 
    }

    .mainpage-card {
      min-width: 950px;      
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
    }   
       
    .mainpage-card-header {
      background-image: linear-gradient(#ac9b96,#78655B,#78655B);
    }
  `, `
    table {
      width: 100%;      
    }
    tr.mat-header-row {
      height: 47px;
    }
    .mat-header-cell {
      background: #a39b86;
      color: #f7f8f8;
      font-weight:bold;
      font-size: 15px;
    }
    .mainpage-paginator {
      background: #d7d0bd26;
    }
    .mat-row:nth-child(even){
      background-color:#f5f2ed;
    }

    .mat-row:nth-child(odd){
      background-color:#ffffff;
    }
    .mat-row:hover {
      background-color: #fdfcd6;
    }
    
  `]
})
export class SearchResultComponent implements OnInit {
  
  condition:string = '';
  
  displayedColumns: string[] = [ 'seq', 'busNo', 'busDate', 'name', 'stf', 'iDNo', 'nationality', 'seat', 'grpCode', 'pNR_Date', 'checkin', 'dateTime', ];
  dataSource = new MatTableDataSource<TravelBusElement>(ELEMENT_DATA);

  @Output()
  openDialog = new EventEmitter();

  onDetailClick(data) {
    console.log(data);
    this.openDialog.emit(data);
  }
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }  

}
