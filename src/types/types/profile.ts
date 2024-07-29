import { FormikProps } from 'formik';

export type InitialValuesT = {
  firstName: string;
  lastName: string;
  personalEmail: string;
  phone: number | null;
  address: string;
  city: string;
  state: string;
  zip: number | null;
  country: string;
  gender: string;
  dob: string;
  education: string;
  experience: string;
  about: string;
  nic: number | null;
  department: string;
  designation: string;
};

export type ProfileFormikT = FormikProps<InitialValuesT>;
