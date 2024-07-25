'use client';
import CardFrameTwo from '@/components/card/card-frame-two';
import Button from '@/components/common/button';
import Input from '@/components/inputs/input';
import Navbar from '@/components/navbar/navbar';
import {
  address,
  initialValues,
  personalDetails,
} from '@/constant/proflie-initial-values';
import validationSchema from '@/schema/profile.schema';
import { useFormik } from 'formik';
import React, { useState } from 'react';

const ProfileView = () => {
  const [isEdit, setIsEdit] = useState(false);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: values => {
      setIsEdit(false);
      values;
    },
  });

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
    <div className='space-y-4'>
      <Navbar heading='Profile' />
      {isEdit ? (
        <form
          onSubmit={submitForm}
          className='space-y-4'
        >
          <CardFrameTwo className='space-y-4'>
            <h1 className='text-primary font-bold text-2xl'>
              Basic Information
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
            <h1 className='text-primary font-bold text-2xl'>
              Address Information
            </h1>
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
      ) : (
        <CardFrameTwo className='space-y-4'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold text-lg flex items-center gap-x-1'>
              <div className='bg-primary h-6 w-1 rounded-md' />
              Profile Details
            </h1>

            <Button
              onClick={() => setIsEdit(true)}
              text='Edit Profile'
            />
          </div>
          {/* <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {personalDetails.map(input => (
              <div
                key={input.name}
                className='flex flex-col gap-1'
              >
                <span className='font-medium text-base'>{input.label}</span>
                <span className='text-base'>
                  {values[input.name as keyof typeof values]}
                </span>
              </div>
            ))}
          </div> */}
        </CardFrameTwo>
      )}
    </div>
  );
};

export default ProfileView;
