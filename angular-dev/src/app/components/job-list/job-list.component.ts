import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Job } from 'src/app/models/jobs.models';
import { JobServiceService } from 'src/app/shared/job-service.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit{
  @Output() jobSelected = new EventEmitter<Job>();
  jobList: Job[] = [];

  constructor(private jobService: JobServiceService){}
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

  onJobSelected(job: Job) {
    this.jobSelected.emit(job);
  }


}
