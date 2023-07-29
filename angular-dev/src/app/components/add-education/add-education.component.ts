import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { DataService } from 'src/app/shared/data.service';
import { educationProfile } from 'src/app/models/user-profile.models';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.scss'],
})
export class AddEducationComponent implements OnInit {
  education: any = {};

  educationData: educationProfile = {
    id: 0, // This will be assigned by the server on save, set it to 0 for new profile
    institution: '',
    degree: '',
    field: '',
    start_date: new Date(),
    end_date: new Date(),
    description: '',
    // Assuming you'll assign the correct profile ID here
  };

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<AddEducationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {}

  saveEducation() {
    console.log(this.educationData);
    // Call the DataService method to save the education profile
    this.dataService.addEducationProfile(this.educationData).subscribe(
      (response) => {
        // Handle successful response here, if needed
        console.log('Education profile saved successfully:', response);

        // Close the modal or perform any other action you need
        this.closeDialog();
      },
      (error) => {
        // Handle error response here, if needed
        console.error('Error saving education profile:', error);
      },
    );
  }

  closeDialog() {
    // Close the dialog without passing any data
    this.dialogRef.close();
  }
}
