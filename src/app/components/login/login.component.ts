import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
  
  <mat-card class="login_margin">  
    <div fxFlex="48" class="login_first_block">
      <h2 class="didact_gothic_font">Log in to      Passenger Information Portal</h2>
      <div class="title_desc didact_gothic_font">
        Please get in touch with our 24x7 customer care centre in case of a problem. 
        The contact details are
      </div>
      <div class="contact_info_group">
        <div class="contact_info">
          <i class="material-icons phone_style"> phone </i> Phone : 
        </div>
        <div class="contact_info">
          <i class="material-icons phone_style"> print </i> Fax : 
        </div>
        <div class="contact_info">
          <i class="material-icons phone_style"> email </i> Email : 
        </div>
      </div>
    </div>      
    <div fxFlex="4">
      <div class="vertical_line"></div>
    </div>
    <div fxFlex class="login_form">      
      <form [formGroup]="formGroup" (ngSubmit)="submit()">
        <p>
          <mat-form-field>
            <input type="text" matInput placeholder="Username" formControlName="username" required>
            <mat-error *ngIf="formGroup.controls['username'].invalid">
              {{getError('user')}}
            </mat-error>
          </mat-form-field>
        </p>
        <p>
          <mat-form-field>
            <input type="password" matInput placeholder="Password" formControlName="password" required>
            <mat-error *ngIf="!formGroup.controls['password'].valid">
              {{getError('pass')}}
            </mat-error>
          </mat-form-field>
        </p>
        <p>
          <mat-checkbox formControlName="remember" >Remember me on this computer!</mat-checkbox>            
        </p>
        <p *ngIf="error" class="error">
          {{ error }}
        </p>
        <div class="button">
          <button type="submit" mat-raised-button [disabled]="!formGroup.valid" (click)="login()">Login</button>
        </div>
      </form>
    </div>
  </mat-card>
  
  `,
  styles: [`
      
      .login_first_block{
        padding: 22px;
      }
      .didact_gothic_font {
        font-family : 'Didact Gothic';
      }
      .login_margin {        
        min-width: 600px;
        max-width: 1000px;
        background: linear-gradient(transparent,#ebebeb 100%);
        height: wrap-content;
        margin: auto;
        margin-top: 100px;
      }
      .phone_style {
        color: red;
        font-size: 18px;
        font-weight: bold;
        vertical-align: bottom;
        padding: 0 0 0 10px;
      }
      .vertical_line {
          height: 100%;
          border-left: 2px solid #e3e3e3;
          margin: 0px;
      }
      .contact_info {
        font-size: 14px;        
        margin: 10px 0px;
      }
      .contact_info_group {
        margin: 30px 0 50px 0;
      }    
      .title_desc {
        color: #645c55;
      }
      .error {
        padding: 16px;
        width: 300px;
        color: white;
        background-color: red;
      }
      
      .mat-form-field{
        width:100%;
      }
      .login_form {
        display: flex;
        justify-content: center;
        margin: 30px 0px;
        width:100%;
        min-width:250px;
      }
      .button {
        display: flex;
        justify-content: flex-end;
      }
  `]
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }
  formGroup: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    remember: new FormControl(''),
  });

  submit() {
    if (this.formGroup.valid) {
      this.submitEM.emit(this.formGroup.value);
    }
  }
  @Input() error: string | null;
  @Output() submitEM = new EventEmitter();
  ngOnInit() {
  }

  getError(el) {
    switch (el) {
      case 'user':
        if (this.formGroup.get('username').hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
  }
  login() {
    this._router.navigate(['home']);
  }

}
