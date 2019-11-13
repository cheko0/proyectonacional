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

  RegisterUser( data: any):Observable<any>{
    return this.httpClient.post(`${this.endPoint}/user/fondeado/register`, data);
  }

  getDataUser(userId:any):Observable<any>{
    return this.httpClient.get(`${this.endPoint}/user/details/${userId}`);
  }

  login(payload:{ email:string,password:string}):Observable<any>{
      return this.httpClient.post<IAccess>(`${this.endPoint}/login`,payload);
  }

  updateProfile(id:any,obj:any){
    console.log(`${this.endPoint}/user/fondeado/${id}`,obj);
    return this.httpClient.put(`${this.endPoint}/user/fondeado/${id}`,obj);
  }

}
