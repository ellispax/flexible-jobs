import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Company } from 'src/app/models/company.model';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {
  company: any;

  companyData: Company = {
    id: 0,
    name: '',
    email: '',
    website: '',
    industry: '',
    description: '',
    address: '',
    phone_number: '',
    company_size: '',
    established_date: new Date(),
  };

  constructor(
    private dataService: DataService,
    public dialogRef: MatDialogRef<AddCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit() {}

  saveCompany() {
    console.log(this.companyData);
    // Call the DataService method to save the education profile
    this.dataService.addCompany(this.companyData).subscribe(
      (response) => {
        // Handle successful response here, if needed
        console.log('Company profile saved successfully:', response);

        // Close the modal or perform any other action you need
        this.closeDialog();
      },
      (error) => {
        // Handle error response here, if needed
        console.error('Error saving Compnay profile:', error);
      },
    );
  }

  closeDialog() {
    // Close the dialog without passing any data
    this.dialogRef.close();
  }
}
