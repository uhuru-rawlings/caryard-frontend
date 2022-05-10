import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from  '../services/user.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private cookie:CookieService, private UserService:UserService, private route:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  
  getuserdet(){
   let token = this.cookie.get("jwt")
   if(token){
      let tokenobj = {
        "jwt": JSON.parse(token)
      }
      this.UserService.decriptuser(tokenobj).subscribe((data) => {
        if(typeof(data) == "string"){
          this.toastr.info("current session has expired, please login.")
        }
      })
   }else{
     this.route.navigate(['/'])
   }
  }
}
