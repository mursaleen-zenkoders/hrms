import React from 'react';
import { DatePicker } from './date-picker';

interface IProps {
  type?: string;
  placeholder?: string;
  className?: string;
  error?: string;
  touched?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  label?: string;
}

const Input = ({
  className,
  placeholder,
  type,
  error,
  touched,
  disabled,
  name,
  onBlur,
  onChange,
  required,
  value,
  label,
}: IProps) => {
  const isError = error && touched;
  return (
    <label
      className={`flex flex-col w-full ${className}`}
      htmlFor={name}
    >
      <span className='font-medium text-base'>{label}</span>
      {type == 'date' ? (
        <DatePicker onSelectDate={date => console.log(date, 'Date')} />
      ) : (
        <input
          disabled={disabled}
          required={required}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          className={`border border-gray-400 rounded-md p-2 outline-none ${isError && 'border-red-400'} focus:!border-primary bg-transparent`}
        />
      )}
      {isError && <span className='text-red-400 text-sm'>{error}</span>}
    </label>
  );
};

export default Input;
