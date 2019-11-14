import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  API: string = 'http://ec2-3-91-200-109.compute-1.amazonaws.com:3000';

  constructor(private http: HttpClient) { }

  getCateogries(): Observable<any[]>{
    return this.http.get<any[]>(`${this.API}/category/list`);
  }

  getProjects(category: string): Observable<any[]>{
    let params = new HttpParams().set("category", category);
    return this.http.get<any[]>(`${this.API}/project/list`, { params: params } );
  }

  getProjectById(id: string): Observable<any>{
    return this.http.get<any>(`${this.API}/project/details/${id}`);
  }

  addProject(project): Observable<any>{
    return this.http.post<any>(`${this.API}/project/register`,  project)
  }

  buyFragment(idKeystone: string, idFragment: string, idUser: string): Observable<any> {
    return this.http.post(`${this.API}/buy/keystone/${idKeystone}/fragment/${idFragment}`, {idUser: idUser});
  }
}
