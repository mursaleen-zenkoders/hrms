import { InitialValuesT } from '@/types/types/profile';

export const initialValues: InitialValuesT = {
  // Personal Details
  firstName: '',
  lastName: '',
  personalEmail: '',
  phone: null,

  // Address
  address: '',
  city: '',
  state: '',
  zip: null,
  country: '',

  // Date of Birth
  dob: '',

  // Other Details
  gender: '',
  education: '',
  experience: '',
  about: '',
  nic: null,
  department: '',
  designation: '',
};

export const personalDetails = [
  {
    label: 'First Name',
    name: 'firstName',
  },
  {
    label: 'Last Name',
    name: 'lastName',
  },
  {
    label: 'Personal Email',
    name: 'personalEmail',
  },
  {
    label: 'Phone Number',
    name: 'phone',
    type: 'number',
  },
  {
    label: 'NIC Number',
    name: 'nic',
    type: 'number',
  },
];

export const address = [
  {
    label: 'Address',
    name: 'address',
  },
  {
    label: 'City',
    name: 'city',
  },
  {
    label: 'State',
    name: 'state',
  },
  {
    label: 'Zip',
    name: 'zip',
    type: 'number',
  },
  {
    label: 'Country',
    name: 'country',
  },
];

export const othersDetails = [
  {
    label: 'Department',
    name: 'department',
  },
  {
    label: 'Designation',
    name: 'designation',
  },
  {
    label: 'Gender',
    name: 'gender',
  },
  {
    label: 'Education',
    name: 'education',
  },
  {
    label: 'Experience',
    name: 'experience',
  },
  {
    label: 'About',
    name: 'about',
    type: 'textarea',
  },
  {
    label: 'Date of Birth',
    name: 'dob',
    type: 'number',
  },
];
