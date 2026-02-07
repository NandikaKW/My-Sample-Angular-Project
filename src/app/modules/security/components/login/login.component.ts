import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  login() {
    if (this.email === 'nandika@gmail.com' && this.password === '123456') {
     this.authService.createToken(this.email);
     this.router.navigate(['/console']).then();
    }else {
      alert('Login failed');
    }
  }

  constructor(private router: Router,private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isExistToken('mytoken')) {
      this.router.navigate(['/console']).then();
    }
  }

}
