import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import RegisterUser from '../models/registerUser';
import { Observable } from 'rxjs';
import { IAccess } from '../models/IAccess';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint = "http://192.168.43.55:3000";

  public options = {
    headers: {}
  }

  constructor(private httpClient: HttpClient) { }

  RegisterUser( data: any) {
    
    return this.httpClient.post(`${this.endPoint}/user/fondeado/register`, data);
  }

  login(payload:{ email:string,password:string}):Observable<any>{
    if(localStorage.getItem("rol")=="FONDEADO"){
    return this.httpClient.post<IAccess>(`${this.endPoint}/fondeado/login`,payload);
    }else {
      return this.httpClient.post<IAccess>(`${this.endPoint}/fondeador/login`,payload);
    }
  }

}
