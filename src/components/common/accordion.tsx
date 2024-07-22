'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import toDoList from '@/../public/assets/icons/To do list.svg';

// Interface
interface IProps {
  date: string;
  content: string;
  day?: string;
}

/**
 * @example
 * <Accordion
 *   question='1. How do I make a booking?'
 *   answer='To make a booking, simply visit our website and navigate to the booking section.'
 * />
 */
const Accordion = ({ content: answer, date, day }: IProps) => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div
      className={`border rounded-lg border-light-gray overflow-hidden
         ${isCollapse ? '!border-primary min-h-[100px] max-h-fit' : 'max-h-[50px] min-h-[50px]'}
        transition-all duration-1000 ease-in-out
        flex flex-col gap-3 p-3
    `}
      style={{ transition: 'all 0.5s ease-in-out' }}
    >
      <div className='flex justify-between items-center'>
        <div className='flex gap-3 font-medium text-base'>
          <Image
            alt=''
            src={toDoList}
            width={20}
            height={20}
          />
          <h1>{day}</h1>
          <h1>{date}</h1>
        </div>

        <div className='w-5 h-5'>
          {!isCollapse ? (
            <IoIosArrowDown
              onClick={() => setIsCollapse(!isCollapse)}
              size={20}
              color='#21AB70'
              className='cursor-pointer'
            />
          ) : (
            <IoIosArrowUp
              onClick={() => setIsCollapse(!isCollapse)}
              size={20}
              color='#21AB70'
              className='cursor-pointer'
            />
          )}
        </div>
      </div>

      <div
        className={`flex flex-col gap-3 transition-all duration-1000 ease-in-out ${isCollapse ? 'border-t pt-2 text-inherit' : 'text-transparent'}`}
      >
        <p className='text-textGray text-sm'>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
{
  /* <div className={`w-full flex justify-between ${isCollapse && 'border-b pb-3'}`}>
  <h1
    className={`${isCollapse ? 'font-medium text-darkGray' : 'font-normal text-textGray'} text-base`}
  >
    {date}
  </h1>
  <div className='w-5 h-5'>
    {isCollapse ? (
      <BiMinusCircle
        onClick={() => setIsCollapse(!isCollapse)}
        size={20}
        className='cursor-pointer'
      />
    ) : (
      <BiPlusCircle
        onClick={() => setIsCollapse(!isCollapse)}
        size={20}
        className='cursor-pointer'
      />
    )}
  </div>
</div>;
{
  isCollapse && (
    <p className={`text-textGray ${isCollapse && 'pt-3'}`}>{answer}</p>
  );
} */
}
