import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:any = ''
  useremail:any = ''
  password:any = ''
  error:string =''
  constructor(private RegisterService:RegisterService, private route:Router) { }

  ngOnInit(): void {
  }
  
  adduser(){
    if(this.username === '' || this.useremail === '' || this.password === ''){
      alert("please fill the required details")
      return
    }else{
      let details = {
        "username":this.username,
        "useremail":this.useremail,
        "password":this.password,
      }

      this.RegisterService.register(details).subscribe((data) => {
        if(typeof(data) == "string"){
          this.error = data
        }else{
          this.username = ''
          this.useremail = ''
          this.password = ''

          this.route.navigate(["/"])
        }
      })
    }
  }
}
