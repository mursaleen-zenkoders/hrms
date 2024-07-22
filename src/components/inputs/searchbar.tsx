'use client';

// React
import React, { FC } from 'react';

// Icons
import { IoSearchOutline } from 'react-icons/io5';

// Interface
interface ISearchInput {
  searchTerm?: string;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const SearchInput: FC<ISearchInput> = ({
  searchTerm,
  setSearchTerm,
  className,
}) => {
  return (
    <div className={`${className}`}>
      <label
        htmlFor='table-search'
        className='sr-only'
      >
        Search
      </label>
      <div className='relative bg-transparent rounded-lg border px-3 flex items-center justify-between border-gray-50'>
        <input
          type='text'
          id='table-search'
          className='w-full text-sm rounded-lg outline-none ring-0 bg-transparent block p-2.5 '
          placeholder='Search...'
          value={searchTerm}
          onChange={e => setSearchTerm && setSearchTerm(e.target.value)}
        />
        <IoSearchOutline
          size={24}
          color='#21AB70'
        />
      </div>
    </div>
  );
};

export default SearchInput;
