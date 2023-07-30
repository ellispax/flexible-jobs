import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonModule } from 'carbon-components-angular/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderModule } from 'carbon-components-angular/ui-shell';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmailsComponent } from './components/emails/emails.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AppSearchBarComponent } from './components/app-search-bar/app-search-bar.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddWorkComponent } from './components/add-work/add-work.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmailsComponent,
    LoginComponent,
    RegisterUserComponent,
    HomeComponent,
    JobListComponent,
    JobDetailsComponent,
    AppSearchBarComponent,
    UserProfileComponent,
    AddEducationComponent,
    AddWorkComponent,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HeaderModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatDialogModule,
    MatDividerModule,
    NgbModule,

    // ButtonSet
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
