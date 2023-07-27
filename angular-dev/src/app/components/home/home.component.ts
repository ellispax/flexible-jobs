
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/jobs.models';
import { JobServiceService } from 'src/app/shared/job-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  jobList: Job[] = [];

  constructor(private jobService: JobServiceService){

  }
  ngOnInit(){
    this.getJobs();

  }
  getJobs(): void {
    this.jobService.getJobs().subscribe(
      (jobs: Job[]) => {
        this.jobList = jobs;
        console.log(this.jobList)
      },
      (error) => {
        console.error('Error fetching job list:', error);
      }
    );
  }


  selectedJob: Job = {
    id: 0,
    title: 'Dummy Job Application',
    company: {
      id: 0,
      name: 'ThugLife',
      email: 'example@example.com',
      website:'www.example.com',
      industry: 'Technology',
      description: 'The company that rocks',
      logo: 'na',
      phone_number: '+263 777 612 441',
      company_size: '100',
      established_date: '01-01-2023'

    },
    requirements_head:'Requirements',
    requirements_bullets:['Good programer', 'Good Jokes'],
    duties_bullets: ['Programming of course'],
    location: 'Mars',
    employement_type: 'Full Time',
    salary: 4000,
    date_posted: '22-07-2023',
    description: 'We dont need you but we need to put something on this space.' }



  showJobDetails(job: Job) {
    this.selectedJob = job;
  }
}
