import { UserProfile } from './../models/user-profile.models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfiledataService {
  private backendUrl = 'http://localhost:8000/profiles/user-profile';
  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.headers = this.headers.set('Authorization', `Token ${authToken}`);
    }
  }

  getProfileData(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.backendUrl, {
      headers: this.headers,
    });
  }
}
