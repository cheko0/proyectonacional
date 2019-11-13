import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import RegisterUser from '../models/registerUser';
import { Observable } from 'rxjs';
import { IAccess } from '../models/IAccess';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint = "http://ec2-3-91-200-109.compute-1.amazonaws.com:3000";

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
    
      return this.httpClient.post<IAccess>(`${this.endPoint}/login`,payload);
    
  }

}
