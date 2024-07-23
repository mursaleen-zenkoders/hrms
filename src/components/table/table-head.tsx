import { ITableHead } from '@/types/Interfaces/table';
import React from 'react';

/**
 *
 * @param IProps
 * @example
 *  <TableHeader tableHeader={['Doctor Name', 'Location','Experience','Education','Status','Action']} />
 */
const TableHeader = ({ tableHeader }: ITableHead) => {
  return (
    <thead className='w-full bg-primary -mt-5'>
      <tr className='h-[60px] border-b border-dark-black w-full'>
        {tableHeader &&
          tableHeader.map((item: string, index: number) => {
            return (
              <th
                key={index}
                className={`px-3 text-base text-dark-black font-bold w-max h-[90%]`}
              >
                {item}
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default TableHeader;
// w-[40%]
