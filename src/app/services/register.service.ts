import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url:string = "http://127.0.0.1:8000/api/register/"
  constructor() { }

  register():Observable{

  }
}
