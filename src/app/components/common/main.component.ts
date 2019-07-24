import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mainlayout',
  template: `
  <div style="height: 100vh;">
    <mat-toolbar>
      <mat-toolbar-row [class.mat-elevation-z2]="true">
        <button mat-icon-button (click)="sidenav.toggle()" fxShow="true" fxHide.gt-sm>
          <mat-icon>menu</mat-icon>
        </button>
        
        <span class="example-spacer"></span>
        <div class="toolbar-css" fxShow="true" fxHide.lt-md="true" *ngIf="isLogin()">
          <span >Welcome, {{username}}</span> |
          <span>{{cur_date}}</span> |
          <a href="#" mat-button>
            Logout
          </a>
        </div>
        <div class="header-image" mat-card-avatar>          
        </div>
      </mat-toolbar-row>
    </mat-toolbar>

    <mat-sidenav-container fxFlexFill>
      <mat-sidenav #sidenav>
        <mat-nav-list *ngIf="isLogin()">
          <div mat-list-item>Welcome,{{username}}</div>
          <div mat-list-item>{{cur_date}}</div>
          <a href="#" mat-list-item>
            Logout
          </a>
          <a (click)="sidenav.toggle()" mat-list-item>
            Close
          </a>
        </mat-nav-list>
      </mat-sidenav>    
      <mat-sidenav-content fxFlexFill>
        <router-outlet></router-outlet>      
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>
  `,
  styles: [`
  .toolbar-css {
    font-family: 'Didact Gothic';
    font-size: 16px;
    font-weight: bold;
  }

  .header-image {    
    background-image: url(/assets/logo.jpg);
    background-size: cover;
    float: right;
    margin-right: 60px;
  }
  
  .mat-toolbar {
    position: relative;
  }
  
  .example-icon {
    padding: 0 0;
  }
    
  .example-spacer {
    flex: 1 1 auto;
  }
  .mat-toolbar-row{
    background: linear-gradient(#e8e8e8 21%, transparent);
    padding: 16px;
    margin-bottom: 16px;
  }
  `]
})
export class MainComponent implements OnInit {

  username = 'user';
  cur_date = '15-Mar-2019';

  constructor(private router: Router, private auth:AuthService) { }
    
  ngOnInit() {
  }
  isLogin() {
    return this.auth.isLogin();
  }

}
