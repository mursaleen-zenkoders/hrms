import CardFrameTwo from '@/components/card/card-frame-two';
import Button from '@/components/common/button';
import Input from '@/components/inputs/input';
import {
  address,
  othersDetails,
  personalDetails,
} from '@/constant/proflie-initial-values';
import { ProfileFormikT } from '@/types/types/profile';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

interface ProfileEditProps {
  formik: ProfileFormikT;
}

// type ValuePiece = Date | null;

// type Value = ValuePiece | [ValuePiece, ValuePiece];

const ProfileEdit = ({ formik }: ProfileEditProps) => {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    submitForm,
    resetForm,
  } = formik;

  return (
    <form
      onSubmit={submitForm}
      className='space-y-4'
    >
      <CardFrameTwo className='space-y-4'>
        <h1 className='text-primary font-bold text-2xl'>
          Personal Information
        </h1>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {personalDetails.map(input => (
            <Input
              key={input.name}
              type={input.type}
              onBlur={handleBlur}
              onChange={handleChange}
              touched={touched[input.name as keyof typeof touched]}
              error={errors[input.name as keyof typeof errors]}
              value={String(values[input.name as keyof typeof values])}
              label={input.label}
              name={input.name}
            />
          ))}
        </div>
      </CardFrameTwo>

      <div className='border-b w-full border-primary' />

      <CardFrameTwo className='space-y-4'>
        <h1 className='text-primary font-bold text-2xl'>Address Information</h1>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {address.map(input => (
            <Input
              key={input.name}
              type={input.type}
              onBlur={handleBlur}
              onChange={handleChange}
              touched={touched[input.name as keyof typeof touched]}
              error={errors[input.name as keyof typeof errors]}
              value={String(values[input.name as keyof typeof values])}
              label={input.label}
              name={input.name}
            />
          ))}
        </div>
      </CardFrameTwo>

      <div className='border-b w-full border-primary' />

      <CardFrameTwo className='space-y-4'>
        <h1 className='text-primary font-bold text-2xl'>Other Information</h1>
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {othersDetails.map(input => (
            <Input
              key={input.name}
              onBlur={handleBlur}
              onChange={handleChange}
              touched={touched[input.name as keyof typeof touched]}
              error={errors[input.name as keyof typeof errors]}
              value={String(values[input.name as keyof typeof values])}
              label={input.label}
              name={input.name}
            />
          ))}
        </div>
      </CardFrameTwo>

      <div className='flex gap-3'>
        <Button
          onClick={handleSubmit}
          text='Submit'
        />
        <Button
          onClick={resetForm}
          text='Reset'
          isOutline
        />
      </div>
    </form>
  );
};

export default ProfileEdit;
