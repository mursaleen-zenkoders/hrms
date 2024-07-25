import React from 'react';

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
      <input
        disabled={disabled}
        required={required}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        className={`border border-gray-400 rounded-md p-2 outline-none ${isError && 'border-red-400'} focus:!border-primary bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10`}
      />
      {isError && <span className='text-red-400 text-sm'>{error}</span>}
    </label>
  );
};

export default Input;
