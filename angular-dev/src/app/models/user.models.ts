export interface User {
  id: number;
  email: string;
  username: string;
  hide_email: Boolean;
}
export interface GeneralUser {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  phoneNumber: string;
}

export interface CompanyUser {
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  phoneNumber: string;
  company: number;
  role: string;
}
