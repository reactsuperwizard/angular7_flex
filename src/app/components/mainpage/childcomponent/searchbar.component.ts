import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-main-search',
  template: `
  
  <div class="mainpage-card-div">
    <h3>Passenger Information Details</h3>
    <mat-card class="mainpage-card">
      <mat-card-header class="mainpage-card-header">
        <mat-card-title class="mainpage-title"> Search </mat-card-title>
      </mat-card-header>    
      <mat-card-content class="mainpage-card-content">
        <div fxFlex="28">
          <div>
            <mat-form-field class="mainpage-full-width">
              <input matInput placeholder="Name">
            </mat-form-field>
          </div>
        </div>
        <div fxFlex="18">
          <div class="mainpage-90-width">
            <mat-form-field class="mainpage-full-width">
              <input matInput placeholder="Bus No">
            </mat-form-field>
          </div>
        </div>
        <div fxFlex="18">
          <div class="mainpage-90-width">
            <mat-form-field class="mainpage-full-width">
              <input matInput [matDatepicker]="picker" placeholder="Bus Date">
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>          
          </div>
        </div>
        <div fxFlex="18">
          <div class="mainpage-90-width">
            <mat-form-field class="mainpage-full-width">
              <input matInput placeholder="Departure">
            </mat-form-field>
          </div>
        </div>
        <div fxFlex="18">
          <div class="mainpage-90-width">
            <mat-form-field class="mainpage-full-width">
              <input matInput placeholder="Arrival">
            </mat-form-field>
          </div>
        </div>
      </mat-card-content>
      <mat-card-actions class="mainpage-card-actions">
        <div fxFlex></div>
        <div fxFlex="200px">
          <button mat-raised-button>Reset</button>
          <button mat-raised-button>Show Pax</button>
        </div>
      </mat-card-actions>
    </mat-card>
  </div>
  
  
  `,
  styles: [`
    /*globe sb bold*/
    h3 {
      font-family : 'Didact Gothic';
      font-size: 1.8em;
    }
    .mainpage-full-width {
      width: 100%;
    }
    .mainpage-card-div {
      margin: 50px 30px; 
    }

    .mainpage-card {
      min-width: 600px;
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
export class SearchBarComponent implements OnInit {

  ngOnInit() {
  }  
  

}
