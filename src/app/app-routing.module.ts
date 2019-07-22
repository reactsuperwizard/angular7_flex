import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/mainpage/mainpage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component:MainPageComponent, data: {title: 'Home'}},
  {path: 'login', component:LoginComponent},
  // default redirect
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
