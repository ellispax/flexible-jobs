import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { DataService } from 'src/app/shared/data.service';
import { workExperience } from 'src/app/models/user-profile.models';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.scss'],
})
export class AddWorkComponent implements OnInit {
  workData: workExperience = {
    id: 0,
    position: '',
    company_name: '',
    experience_type: '',
    description: '',
    industry: '',
    location: '',
    start_date: '',
    end_date: '',
    is_active: false,
  };

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<AddWorkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {}

  saveEducation() {
    console.log(this.workData);
    // Call the DataService method to save the education profile
    this.dataService.addWorkProfile(this.workData).subscribe(
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
