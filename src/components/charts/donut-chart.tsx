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
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import CardFrameTwo from '../card/card-frame-two';
import ChartFooter from './chart-footer';

const chartData = [
  { browser: 'Present', visitors: 275, fill: '#21AB70' },
  { browser: 'Absent', visitors: 200, fill: '#C94040' },
  { browser: 'Half day', visitors: 187, fill: '#F1C34D' },
  { browser: 'Late', visitors: 173, fill: '#102C75' },
  { browser: 'WFH', visitors: 90, fill: '#4474ED' },
  { browser: 'Short time', visitors: 50, fill: '#181818' },
];

const chartConfig = {
  Present: {
    label: 'Present',
    color: '#21AB70',
  },
  Absent: {
    label: 'Absent',
    color: '#C94040',
  },
  HalfDay: {
    label: 'Half day',
    color: '#F1C34D',
  },
  Late: {
    label: 'Late',
    color: '#102C75',
  },
  WFH: {
    label: 'WFH',
    color: '#4474ED',
  },
  ShortTime: {
    label: 'Short time',
    color: '#181818',
  },
} satisfies ChartConfig;

const chartFooter = [
  { day: '15', color: '#21AB70', label: 'Present' },
  { day: '01', color: '#C94040', label: 'Absent' },
  { day: '02', color: '#F1C34D', label: 'Half day' },
  { day: '02', color: '#102C75', label: 'Late' },
  { day: '02', color: '#4474ED', label: 'WFH' },
  { day: '0', color: '#181818', label: 'Short time' },
];

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
