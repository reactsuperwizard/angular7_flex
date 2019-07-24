import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';


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
        <form [formGroup]="schFrm">
          <div fxFlex="28">
            <div>
              <mat-form-field class="mainpage-full-width">
                <input matInput placeholder="Name" formControlName="name">
              </mat-form-field>
            </div>
          </div>
          <div fxFlex="18">
            <div class="mainpage-90-width">
              <mat-form-field class="mainpage-full-width">
                <input matInput placeholder="Bus No" formControlName="busno">
              </mat-form-field>
            </div>
          </div>
          <div fxFlex="18">
            <div class="mainpage-90-width">
              <mat-form-field class="mainpage-full-width">
                <input matInput [matDatepicker]="picker" placeholder="Bus Date" formControlName="busdate">
                <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
              </mat-form-field>          
            </div>
          </div>
          <div fxFlex="18">
            <div class="mainpage-90-width">
              <mat-form-field class="mainpage-full-width">
                <input matInput placeholder="Departure" formControlName="departure">
              </mat-form-field>
            </div>
          </div>
          <div fxFlex="18">
            <div class="mainpage-90-width">
              <mat-form-field class="mainpage-full-width">
                <input matInput placeholder="Arrival" formControlName="arrival">
              </mat-form-field>
            </div>
          </div>
        </form>
      </mat-card-content>
      <mat-card-actions class="mainpage-card-actions">
        <div fxFlex></div>
        <div fxFlex="200px">
          <button mat-raised-button (click)="resetClick()">Reset</button>
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

  schFrm = new FormGroup({
    name: new FormControl(''),
    busno: new FormControl(''),
    busdate: new FormControl(''),
    departure: new FormControl(''),
    arrival: new FormControl(''),
  });

  ngOnInit() {

  }

  resetClick() {
    this.schFrm.setValue({ name: '', busno: '', busdate: '', departure: '', arrival: '' });
  }


}
