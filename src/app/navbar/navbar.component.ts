import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  login:any = 'block'
  button:any = 'Login'
  constructor() { }

  ngOnInit(): void {
  }

  toogleForm(){
    this.login = 'none'
  }
}
