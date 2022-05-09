import { Component, OnInit } from '@angular/core';
import { ResetService } from '../services/reset.service';
@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  useremail:any = ''
  password:any = ''
  error:any =''
  success:any =''
  constructor(private ResetService:ResetService) { }

  ngOnInit(): void {
  }
  reset(){
    if(this.useremail === '' || this.password === ''){
      alert('please fill all required fields')
      return
    }else{
      let details = {
        "useremail":this.useremail,
        "password":this.password
      }

      this.ResetService.resetpassword(details).subscribe((data) => {
        if(data === "user dont exist."){
          this.error = data
        }else{
          this.success = data
        }
      })
    }
  }
}
