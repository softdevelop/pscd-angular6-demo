import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { mapTo } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private isLogin = false;
  constructor() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      this.isLogin = true;
    }
  }

  login(value): Observable<boolean> {
    let _isLogin = false || this.isLogin;
    if (!_isLogin && value.email === 'test@gmail.com' && value.password === '123123') {
      localStorage.setItem('currentUser', JSON.stringify({email: value.email}));
      _isLogin = true;
    }
    setTimeout(() => {
      this.isLogin = _isLogin;
    }, 2000);
    return of(null).pipe(
      mapTo(_isLogin),
      delay(2000)
    );
  }

  logout(): void {
    this.isLogin = false;
    localStorage.removeItem('currentUser');
  }

  checkLogin(): boolean {
    return this.isLogin;
  }
}
