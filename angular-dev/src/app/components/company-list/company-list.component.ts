import { Component, OnInit, inject } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Company } from 'src/app/models/company.model';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddCompanyComponent } from '../add-company/add-company.component';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companyList: Company[] = [];
  displayedColumns: string[] = [
    'name',
    'email',
    'website',
    'industry',
    'size',
    'action',
  ];
  constructor(
    private dataService: DataService,
    private dialog: MatDialog,
  ) {}

  dataSource!: MatTableDataSource<Company>;
  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.dataService.getCompanies().subscribe(
      (companies: Company[]) => {
        this.companyList = companies;
        console.log(this.companyList);
        this.dataSource = new MatTableDataSource(this.companyList);
      },
      (error) => {
        console.error('Error fetching job list:', error);
      },
    );
  }

  openAddCompany() {
    const dialogRef = this.dialog.open(AddCompanyComponent, {
      width: '400px', // Adjust the width as per your requirements
    });

    dialogRef.afterClosed().subscribe((result) => {
      // Handle any actions after the dialog is closed
      console.log('Dialog closed', result);
    });
  }

  openEditCompany(company: Company) {}

  deleteCompany(company: Company) {}
}
