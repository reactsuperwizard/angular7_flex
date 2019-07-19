import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component'
import { MainComponent } from './components/common/main.component'
import { MainPageComponent } from './components/mainpage/mainpage.component';
import { SearchBarComponent } from './components/mainpage/childcomponent/searchbar.component';
import { SearchResultComponent } from './components/mainpage/childcomponent/searchresult.component';
import { DetailDialogComponent } from './components/mainpage/childcomponent/detaildialog.component'
import { SubDetailPanComponent } from './components/mainpage/childcomponent/subdetailpan.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MainPageComponent,
    SearchBarComponent,
    SearchResultComponent,
    DetailDialogComponent,
    SubDetailPanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[
    DetailDialogComponent
  ]
})
export class AppModule { }
