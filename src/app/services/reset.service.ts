import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {
  url:string = "http://127.0.0.1:8000/api/reset/"
  constructor(private http:HttpClient) { }

  resetpassword(details:any):Observable<any>{
    return this.http.post(this.url, details)
  }
}
