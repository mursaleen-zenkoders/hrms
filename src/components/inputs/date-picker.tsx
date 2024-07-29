'use client';

import { format } from 'date-fns';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

import { BsCalendar4Week } from 'react-icons/bs';

interface DatePickerProps {
  onSelectDate?: React.Dispatch<React.SetStateAction<string>>;
}

export function DatePicker({ onSelectDate }: DatePickerProps) {
  const [date, setDate] = React.useState<Date>();

  const selectData = (date: Date) => {
    const formattedDate = format(date, 'P');
    const replacedDate = formattedDate.replace(/\//g, '-');
    setDate(date);
    onSelectDate && onSelectDate(replacedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full flex justify-between text-left font-normal border-gray-50',
            !date && 'text-muted-foreground',
            'sm:max-w-[400px]',
          )}
        >
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
          <BsCalendar4Week
            className='h-4 w-4'
            color='#21AB70'
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0 border-none bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 text-white'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={date => selectData(date as Date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
