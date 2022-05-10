import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:any = ''
  button:any = ''
  error:any = ''
  useremail:any = ''
  password:any = ''
  constructor(private toastr:ToastrService,private LoginService:LoginService, private cookie:CookieService, private user:UserService) { }

  ngOnInit(): void {
    this.toogleLogin()
    this.decript()
  }

  toogleForm(){
     if(this.login == ''){
      this.login = 'none'
     }else{
      this.login = ''
     }
  }
  logoutuser(){
      this.cookie.delete("jwt")
      window.location.reload()
  }
  toogleLogin(){
    let user = this.cookie.get("jwt")
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
          window.location.reload()
        }
        console.log(data)
      })
    }
    
  }
  decript(){
    let token = this.cookie.get("jwt")
    if (token){
      let tokenobj = {
        "jwt":token
      }
       this.user.decriptuser(tokenobj).subscribe((data) =>{
       console.log(data)
    })
  }else{
     this.toastr.warning("To enjoy better service please login.")
  }
  }
}
