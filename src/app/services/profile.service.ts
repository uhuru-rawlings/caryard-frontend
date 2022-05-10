import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  models:string = "http://127.0.0.1:8000/api/carmodels/";
  constructor() { }
}
