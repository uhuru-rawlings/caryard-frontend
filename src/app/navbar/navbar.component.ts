import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:any = ''
  button:any = 'Login'
  constructor() { }

  ngOnInit(): void {
  }

  toogleForm(){
     if(this.login == ''){
      this.login = 'none'
     }else{
      this.login = ''
     }
  }
}
