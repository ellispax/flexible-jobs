// job.model.ts

import { Company } from "./company.model";

export interface Job {
  id: number;
  title: string;
  company: Company;
  description:string;
  duties_bullets: string[];
  employement_type: string;
  location: string;
  salary: number;
  requirements_head:string;
  requirements_bullets: string[];
  date_posted: string;
  // is_active: boolean;
  // Add more properties as needed
}
