'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  CardContent,
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
  { month: 'January', OfficeHours: 186, WorkingHours: 80 },
  { month: 'February', OfficeHours: 305, WorkingHours: 200 },
  { month: 'March', OfficeHours: 237, WorkingHours: 120 },
  { month: 'April', OfficeHours: 73, WorkingHours: 190 },
  { month: 'May', OfficeHours: 209, WorkingHours: 130 },
  { month: 'June', OfficeHours: 214, WorkingHours: 140 },
];

const chartConfig = {
  desktop: {
    label: 'Office Hours',
    color: '#21AB70',
  },
  mobile: {
    label: 'Working Hours',
    color: '#9EA9AA',
  },
} satisfies ChartConfig;

export function BarChartComp() {
  return (
    <CardFrameTwo>
      <CardHeader>
        <CardTitle>Weekly Working Hours</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value: string) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dashed' />}
            />
            <Bar
              dataKey='OfficeHours'
              fill='#21AB70'
              radius={8}
            />
            <Bar
              dataKey='WorkingHours'
              fill='#9EA9AA'
              radius={8}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex gap-x-5 flex-col sm:flex-row'>
        <ChartFooter
          color='#21AB70'
          label='Office Hours'
          doitSize='8px'
        />

        <ChartFooter
          color='#9EA9AA'
          label='Working Hours'
          doitSize='8px'
        />
      </CardFooter>
    </CardFrameTwo>
  );
}
