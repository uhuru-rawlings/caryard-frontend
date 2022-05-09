import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:any = ''
  useremail:any = ''
  password:any = ''
  constructor() { }

  ngOnInit(): void {
  }

}
