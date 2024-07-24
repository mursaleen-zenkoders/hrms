'use client';
import CardFrameTwo from '@/components/card/card-frame-two';
import Navbar from '@/components/navbar/navbar';
import Table from '@/components/table/table';
import TableBody from '@/components/table/table-body';
import TableHeader from '@/components/table/table-head';
import { tableBody, tableHeader } from '@/constant/dummy-data/table';
import React, { useState } from 'react';

const AttendanceView = () => {
  const [limits, setLimits] = useState<number>(5);
  const [pages, setPages] = useState<number>(1);

  return (
    <div className='space-y-5 h-fit md:h-full md:max-h-[83dvh]'>
      <Navbar heading='Attendance' />
      <CardFrameTwo className='h-full !p-0'>
        <Table
          isPending={false}
          currentPage={pages}
          total={tableBody.length}
          rowsPerPage={limits}
          setCurrentPage={setPages}
          setRowsPerPage={setLimits}
          rowsOption={[10, 20, 30]}
        >
          <TableHeader tableHeader={tableHeader} />
          {tableBody.map((item, index) => (
            <TableBody
              key={index}
              {...item}
            />
          ))}
        </Table>
      </CardFrameTwo>
    </div>
  );
};

export default AttendanceView;
