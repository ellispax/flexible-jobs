import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  ngOnInit() {

  }
  constructor(private authService: AuthService){}

  onLoginSubmit(email: string, password: string): void {
    this.authService.login(email, password).subscribe(
      (response) => {
        // The login was successful and the token is saved in local storage
        // Redirect the user or perform other actions as needed
        console.log('Login successful! Token:', response.token);
      },
      (error) => {
        // Handle login error, display error message, etc.
        console.error('Login error:', error);
      }
    );
  }

}
