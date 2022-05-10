import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userdet:any;
  constructor(private cookie:CookieService, private user:UserService, private route:Router) { }

  ngOnInit(): void {
  }
  getuser(){
    let token = this.cookie.get("jwt")
    let tokens = {
      "jwt": JSON.parse(token)
    }
    if (token){
     this.user.decriptuser(tokens).subscribe((data) => {
       if(typeof(data) != "string"){
        this.userdet = data
       }
     })
    }else{
      this.route.navigate(['/'])
    }
  }
}
