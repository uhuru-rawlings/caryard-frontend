import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  error:any = ''
  useremail:any = ''
  password:any = ''
  constructor(private LoginService:LoginService, private cookie:CookieService) { }

  ngOnInit(): void {
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
      })
    }
  }
}
