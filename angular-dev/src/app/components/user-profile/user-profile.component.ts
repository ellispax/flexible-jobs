import { Component, OnInit } from '@angular/core';
import { ProfiledataService } from 'src/app/shared/profiledata.service';
import { UserProfile } from 'src/app/models/user-profile.models';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  constructor(private profileService: ProfiledataService) {}
  userProfile!: UserProfile;
  ngOnInit() {
    this.fetchUserProfile();
  }

  fetchUserProfile(): void {
    this.profileService.getProfileData().subscribe(
      (data) => {
        this.userProfile = data;
        // You can now access the user profile data in this.userProfile
        console.log(this.userProfile);
      },
      (error) => {
        console.error('Error fetching user profile data:', error);
      },
    );
  }
}
