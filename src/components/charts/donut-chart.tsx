'use client';

import { Pie, PieChart } from 'recharts';

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import {
  chartConfig,
  chartData,
  chartFooter,
} from '@/constant/dummy-data/chart';

import CardFrameTwo from '../card/card-frame-two';
import ChartFooter from './chart-footer';

export function DonutChart() {
  return (
    <CardFrameTwo className='h-full'>
      <CardHeader className='pb-0'>
        <CardTitle>Attendance</CardTitle>
        <CardDescription className='text-lg'>
          90% (18 out of 20 days)
        </CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square h-full max-h-[400px]'
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='visitors'
              nameKey='browser'
              //   innerRadius={100}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5'>
        {chartFooter.map((item, index) => (
          <div
            key={index}
            className='flex gap-x-5 justify-between sm:pr-5'
          >
            <ChartFooter
              {...item}
              doitSize={'12px'}
            />
            <p>{item.day} Day</p>
          </div>
        ))}
      </CardFooter>
    </CardFrameTwo>
  );
}
