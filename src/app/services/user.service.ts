import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string = 'http://127.0.0.1:8000/api/getuser/'
  constructor(private http:HttpClient, private cookie:CookieService) { }

  decriptuser(token:any):Observable<any>{
   
    return this.http.post(this.url, token)
  }
}
