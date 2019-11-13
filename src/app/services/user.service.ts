import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import RegisterUser from '../models/registerUser';
import { Observable } from 'rxjs';
import { IAccess } from '../models/IAccess';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint = "http://192.168.12.221:3000";

  public options = {
    headers: {}
  }

  constructor(private httpClient: HttpClient) { }

  RegisterUser( data: any) {
    
    return this.httpClient.post(`${this.endPoint}/user/fondeado/register`, data);
  }

  login(payload:{ email:string,password:string}):Observable<any>{
      return this.httpClient.post<IAccess>(`${this.endPoint}/login`,payload);
  }

}
