import React from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

interface IProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number | undefined>>;
  totalPages: number;
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }: IProps) => {
  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
      maxWidth={5}
      className='flex gap-[5px] justify-end'
      pageItemClassName='font-semibold text-[13px] rounded-lg w-[32px] h-[32px] flex justify-center items-center'
      activeItemClassName='border-none bg-primary text-white w-[32px] h-[32px]'
      disabledItemClassName='text-lightGray'
    />
  );
};

export default Pagination;
