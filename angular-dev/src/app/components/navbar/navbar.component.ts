import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isLoggedIn: boolean = false;

  // buttonType: ButtonType = ButtonType.PRIMARY;
  ngOnInit(){
    this.isLoggedIn = this.authService.isLoggedIn();

  }

  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
  }

}
