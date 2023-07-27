
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/app/models/jobs.models';


@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  private backendUrl = 'http://localhost:8000/jobs';

  constructor(private http: HttpClient) { }
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.backendUrl);
}
}
