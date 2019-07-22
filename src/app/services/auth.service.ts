import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isLogin() {
    if (this.router.url == '/login') return false;
    return true;

  }
}
