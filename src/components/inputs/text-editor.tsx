'use client';
// React Quill Editor
import 'react-quill/dist/quill.snow.css';

import { FormikHandlers } from 'formik';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

interface IProps {
  label: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
}

const TextEditor = ({ label, onChange, value }: IProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    [],
  );

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
  ];

  return (
    <div className='space-y-1 h-full xl:min-h-[380px]'>
      <p>{label}</p>
      <ReactQuill
        placeholder='Type here...'
        onChange={e => onChange(e)}
        value={value}
        preserveWhitespace={true}
        className='h-full xl:max-h-[300px]'
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default TextEditor;
