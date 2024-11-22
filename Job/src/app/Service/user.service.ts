import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl="http://localhost:8080/api/auths";

  constructor(private http: HttpClient ) {}

  register(Authenticate:any):Observable<any>
  {
    return this.http.post(`${this.apiUrl}`, Authenticate);
  }

  getUserProfile(username:any):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/{username}`);
  }

  // loginUser(Authenticate:any):Observable<any>{
  //   return this.http.post(`${this.apiUrl}/login`,Authenticate);
  // }
  loginUser(Authenticate:any): Observable<any> {
    return this.http.post('http://localhost:8080/api/auths/login', Authenticate);
}

}
