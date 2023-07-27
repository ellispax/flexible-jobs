import { Component, Input } from '@angular/core';
import { Job } from 'src/app/models/jobs.models';
import { faCoffee,faBuilding, faMapMarked, faUserFriends } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent {
  faCoffee = faCoffee;
  faBuilding = faBuilding;
  faMap = faMapMarked;
  faUser = faUserFriends

  @Input() selectedJob: Job = {
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
    duties_bullets: [],

    location: 'Mars',
    employement_type: 'Full Time',
    salary: 4000,
    date_posted: '22-07-2023',
    description: 'We dont need you but we need to put something on this space.' }



  }



