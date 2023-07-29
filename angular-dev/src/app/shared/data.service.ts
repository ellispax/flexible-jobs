import { Injectable } from '@angular/core';
import {
  educationProfile,
  workExperience,
} from '../models/user-profile.models';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private backendUrl = 'http://localhost:8000/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json', // Explicitly set the content type to JSON
  });

  constructor(private http: HttpClient) {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.headers = this.headers.set('Authorization', `Token ${authToken}`);
    }
  }

  // Function to add an education profile
  addEducationProfile(educationData: educationProfile): Observable<any> {
    const url = `${this.backendUrl}profiles/education-profile`;
    return this.http.post<any>(url, educationData, { headers: this.headers });
  }
  // Function to update an education profile
  updateEducationProfile(educationData: educationProfile): Observable<any> {
    const url = `${this.backendUrl}profiles/education-profile/${educationData.id}/`;
    return this.http.put<any>(url, educationData, { headers: this.headers });
  }
}
