import { User } from './user.models';
import { GeneralUser } from './user.models';

export interface educationProfile {
  id: number;
  institution: string;
  degree: string;
  field: string;
  start_date: Date;
  end_date: Date;
  description: string;
  // user: number;
  // profile: number;
}
export interface workExperience {
  id: number;
  position: string;
  experience_type: string;
  company_name: string;
  industry: string;
  description: string;
  location: string;
  is_active: false;
  start_date: string;
  end_date: string;
  user: number;
  profile: number;
}
export interface Skill {
  id: number;
  name: string;
}
export interface UserSkill {
  skill: Skill;
}
export interface UserProfile {
  id: number;
  user: User;
  education_profile: educationProfile[];
  work_experience_profiles: workExperience[];
  skills: UserSkill[];

  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  phoneNumber: string;
  about: string;
  resume: string;
}
