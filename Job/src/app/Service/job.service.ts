import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

type NewType = any;

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl="http://localhost:8080/api/task";
  private apiRapid="https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=5bde9401&app_key=04a6f6a7e06e291353138b8ce82f00b4";
  private country="https://api.adzuna.com/v1/api/jobs/in/search/1?app_id=5bde9401&app_key=04a6f6a7e06e291353138b8ce82f00b4";
  // private apiDetails="https://www.adzuna.co.uk/jobs/details/"
  // private appId = '5bde9401';
  // private appKey = '04a6f6a7e06e291353138b8ce82f00b4';
  constructor(private http:HttpClient) { }

  getJob():Observable<any[]>
  {
    return this.http.get<any[]>(this.apiUrl);
  }
  getJobById(jobId:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${jobId}`);
  }

  createJob(job:any):Observable<any>{
    return this.http.post(`${this.apiUrl}`,job);
  }
  
  getJobing():Observable<any>{
    return this.http.get(this.apiRapid);
  }
  getJobs(): Observable<any> {
    const url = `${this.apiRapid}`;
    return this.http.get(url);
  }

  // getJobsByLocation(location: string): Observable<any> {
  //   const url = `${this.country}`;
  //   return this.http.get(url);
  // }
  getJobsByLocation(): Observable<any> {
    const url = `${this.apiRapid}`;
    return this.http.get(url);
  }

  // Fetch job details by ID
  // getJobDetails(jobId: string): Observable<any> {
  //   const url = `${this.apiRapid}/${jobId}`;
  //   return this.http.get(url);
  // }
  getJobDetails(jobId: string): Observable<any> {
    const url = `${this.apiRapid}/&id=${jobId}`;
    return this.http.get(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error fetching job details:', error);
        return throwError(() => new Error('Failed to fetch job details.'));
      })
    );

}
}
