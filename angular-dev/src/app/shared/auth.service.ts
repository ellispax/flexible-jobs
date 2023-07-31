import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GeneralUser } from '../models/user.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl = 'http://localhost:8000/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json', // Explicitly set the content type to JSON
  });

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    // Set the headers for the 'Content-Type' to 'application/json'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    const url = `${this.backendUrl}users/login`;

    return this.http.post<any>(url, loginData, httpOptions).pipe(
      tap((response) => {
        // Save the authentication token to local storage
        localStorage.setItem('authToken', response.token);

        // Redirect to the home page after a successful login
        this.router.navigateByUrl('/home');
      }),
      catchError(this.handleError), // Handle errors if any
    );
  }

  register(userData: GeneralUser): Observable<any> {
    const url = `${this.backendUrl}users/register`;
    return this.http.post<any>(url, userData, { headers: this.headers }).pipe(
      tap((response) => {
        // Redirect to the login page after a successful login
        this.router.navigateByUrl('/login');
      }),
      catchError(this.handleError), // Handle errors if any
    );
  }

  logout(): void {
    // Remove the authentication token from local storage
    localStorage.removeItem('authToken');

    // Redirect to the login page (or any other desired page)
    this.router.navigateByUrl('/home');
  }

  isLoggedIn(): boolean {
    // Check if the authentication token exists in local storage
    return !!localStorage.getItem('authToken');
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.error}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
