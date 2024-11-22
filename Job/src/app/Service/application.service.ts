import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl="http://localhost:8080/api/applicants";

  constructor(private http: HttpClient) { }

  applyJob(send:any):Observable<any>{
    return this.http.post(`${this.apiUrl}`, send);

  }
}
