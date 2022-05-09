import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:any = ''
  useremail:any = ''
  password:any = ''
  constructor(private RegisterService:RegisterService) { }

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
        console.log(data)
      })
    }
  }
}
