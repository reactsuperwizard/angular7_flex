import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainlayout',
  template: `
  <div style="height: 100vh;">
    <mat-toolbar color="primary">
      <mat-toolbar-row>
        <button mat-icon-button (click)="sidenav.toggle()" fxShow="true" fxHide.gt-sm>
          <mat-icon>menu</mat-icon>
        </button>
        <span>Title</span>
        <span class="example-spacer"></span>
        <div fxShow="true" fxHide.lt-md="true">
        <!-- The following menu items will be hidden on both SM and XS screen sizes -->
          <span>Welcome,{{username}}</span> |
          <span>{{cur_date}}</span> |
          <a href="#" mat-button>
            Logout
          </a>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>

    <mat-sidenav-container fxFlexFill>
      <mat-sidenav #sidenav>
        <mat-nav-list>
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
  .example-icon {
    padding: 0 0;
  }
    
  .example-spacer {
    flex: 1 1 auto;
  }

  `]
})
export class MainComponent implements OnInit {
  username = 'user'
  cur_date = '15-Mar-2019'
  constructor() { }

  ngOnInit() {
  }

}
