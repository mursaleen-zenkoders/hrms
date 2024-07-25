export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: null,
  address: '',
  city: '',
  state: '',
  zip: null,
  country: '',
  gender: '',
  dob: '',
  education: '',
  experience: '',
  skills: '',
  about: '',
  profilePicture: '',
  nic: null,
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
    label: 'Email',
    name: 'email',
  },
  {
    label: 'Phone Number',
    name: 'phone',
    type: 'number',
  },
  {
    label: 'Gender',
    name: 'gender',
  },
  {
    label: 'Date of Birth',
    name: 'dob',
    type: 'date',
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
    label: 'Skills',
    name: 'skills',
  },
  {
    label: 'About',
    name: 'about',
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
