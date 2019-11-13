import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import RegisterUser from '../models/registerUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint = "http://localhost:4300";

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
}
