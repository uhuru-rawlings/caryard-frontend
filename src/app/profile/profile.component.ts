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
  initials:any;
  constructor(private cookie:CookieService, private user:UserService, private route:Router) { }

  ngOnInit(): void {
    this.getuser()
    
  }
  getuser(){
    let token = this.cookie.get("jwt")
    
    if (token){
    let tokens = {
      "jwt": JSON.parse(token)
    }
     this.user.decriptuser(tokens).subscribe((data) => {
       if(typeof(data) != "string"){
        this.userdet = data
        console.log(this.userdet)
        this.userinit()
       }
     })
    }else{
      this.route.navigate(['/'])
    }
  }
  userinit(){
    if(this.userdet){
      let texts = this.userdet.username
      let array = texts.split(" ")
      if(array.length > 1){
          this.initials = array[0]+ "." + array[1]
      }else{
        this.initials = array[0]
      }
      console.log(array)
    }else{
      this.route.navigate(['/'])
    }
  }
}
