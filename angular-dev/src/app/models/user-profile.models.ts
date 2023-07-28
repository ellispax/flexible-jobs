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
  user: number;
  profile: number;
}
export interface workExperience {
  id: number;
  institution: string;
  degree: string;
  field: string;
  start_date: Date;
  end_date: Date;
  description: string;
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
  education: educationProfile;
  work: workExperience;
  skills: UserSkill;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  phoneNumber: string;
}
