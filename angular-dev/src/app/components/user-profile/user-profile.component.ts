import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from 'src/app/shared/profiledata.service';
import { UserProfile } from 'src/app/models/user-profile.models';
import { MatDialog } from '@angular/material/dialog';
import { AddEducationComponent } from '../add-education/add-education.component';
import { AddWorkComponent } from '../add-work/add-work.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private profileService: ProfiledataService,
  ) {}
  // userProfile!: UserProfile;
  userProfile: UserProfile = {
    id: 0,
    firstName: '',
    lastName: '',
    gender: '',
    about: '',
    address: '',
    phoneNumber: '',
    resume: '',

    user: {
      id: 0,
      email: '',
      username: '',
      hide_email: true,
    },
    education_profile: [],
    work_experience_profiles: [],
    skills: [],
  };
  ngOnInit() {
    this.fetchUserProfile();
  }

  fetchUserProfile(): void {
    this.profileService.getProfileData().subscribe(
      (data) => {
        console.log('this data: ', data);
        this.userProfile = data;
        // You can now access the user profile data in this.userProfile
        console.log(this.userProfile.education_profile);
      },
      (error) => {
        console.error('Error fetching user profile data:', error);
      },
    );
  }
  openAddWork() {
    const dialogRef = this.dialog.open(AddWorkComponent, {
      width: '400px', // Adjust the width as per your requirements
      // You can also specify other dialog configuration options here
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the dialog is closed
      console.log('Dialog closed', result);
    });
  }
  openAddEducation() {
    const dialogRef = this.dialog.open(AddEducationComponent, {
      width: '400px', // Adjust the width as per your requirements
      // You can also specify other dialog configuration options here
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the dialog is closed
      console.log('Dialog closed', result);
    });
  }
}
