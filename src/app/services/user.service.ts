import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import RegisterUser from '../models/registerUser';
import { Observable } from 'rxjs';
import { IAccess } from '../models/IAccess';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint = "http://localhost:3000";

  public options = {
    headers: {}
  }

  constructor(private httpClient: HttpClient) { }

  RegisterUser(token, data: RegisterUser) {
    this.options.headers = new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': token
      })
    return this.httpClient.post(`${this.endPoint}/user/register`, JSON.stringify(data), this.options);
  }

  login(payload:{ email:string,password:string}):Observable<any>{
    if(localStorage.getItem("rol")=="FONDEADO"){
    return this.httpClient.post<IAccess>(`${this.endPoint}/fondeado/login`,payload);
    }else {
      return this.httpClient.post<IAccess>(`${this.endPoint}/fondeador/login`,payload);
    }
  }

}
