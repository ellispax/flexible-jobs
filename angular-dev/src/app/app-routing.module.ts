import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailsComponent } from './components/emails/emails.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HomeComponent } from './components/home/home.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [

  {path: '', component:HomeComponent},
  {path: 'email', component:EmailsComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register-user', component:RegisterUserComponent},
  {path: 'home', component:HomeComponent},
  {path: 'user-profile', component:UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
