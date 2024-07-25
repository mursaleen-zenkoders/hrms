import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.number()
    .typeError('Phone number must be a number')
    .required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('ZIP code is required'),
  country: Yup.string().required('Country is required'),
  gender: Yup.string().required('Gender is required'),
  dob: Yup.date().required('Date of birth is required').nullable(),
  education: Yup.string().required('Education is required'),
  experience: Yup.string().required('Experience is required'),
  skills: Yup.string().required('Skills are required'),
  about: Yup.string().required('About is required'),
  nic: Yup.number().required('CNIC is required'),
});

export default validationSchema;
