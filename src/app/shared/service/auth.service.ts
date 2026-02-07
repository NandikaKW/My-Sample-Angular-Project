import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookiesService: CookieService) { 

  }

  public createToken(token: string) {
    this.cookiesService.set('mytoken', token);
  }

  public isExistToken(key: string): boolean {
    return this.cookiesService.check(key);
  }

  public getToken(key: string): string {
    if (this.isExistToken(key)) {
      return this.cookiesService.get(key);
    }
    return '';
  }
}
