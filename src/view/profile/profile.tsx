'use client';
import Navbar from '@/components/navbar/navbar';
import { initialValues } from '@/constant/proflie-initial-values';
import validationSchema from '@/schema/profile.schema';
import { EditUserMutationHook } from '@/services/react-query-client/user/patch-users';
import { useFormik } from 'formik';
import { useState } from 'react';
import toast from 'react-hot-toast';
import ProfileDetails from './profile-details';
import ProfileEdit from './profile-edit';

const ProfileView = () => {
  const [isEdit, setIsEdit] = useState(true);

  const { mutateAsync } = EditUserMutationHook();

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async values => {
      try {
        await mutateAsync({ values });
        setIsEdit(false);
      } catch (error) {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error('An unknown error occurred');
        }
      }
    },
  });

  return (
    <div className='space-y-4'>
      <Navbar heading='Profile' />
      {isEdit ? (
        <ProfileEdit formik={formik} />
      ) : (
        <ProfileDetails
          formik={formik}
          setIsEdit={setIsEdit}
        />
      )}
    </div>
  );
};

export default ProfileView;
