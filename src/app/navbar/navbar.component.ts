import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:any = ''
  button:any = 'f'
  error:any = ''
  useremail:any = ''
  password:any = ''
  constructor(private LoginService:LoginService, private cookie:CookieService) { }

  ngOnInit(): void {
    this.toogleLogin()
  }

  toogleForm(){
     if(this.login == ''){
      this.login = 'none'
     }else{
      this.login = ''
     }
  }
  toogleLogin(){
    let user = this.cookie.get("userd")
    {user ? this.button = "Logout": this.button = ''}
  }

  loginuser(){
    if(this.useremail ==='' || this.password === ''){
      alert("please fill out all required fields")
      return
    }else{
      let details = {
        "useremail":this.useremail,
        "password":this.password
      }

      this.LoginService.loginuser(details).subscribe((data) => {
        if(typeof(data) == "string"){
          this.error = data
        }else{
          this.cookie.set("jwt",JSON.stringify(data.jwt))
        }
        console.log(data)
      })
    }
  }
}
