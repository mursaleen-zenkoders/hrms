import { ChartConfig } from '@/components/ui/chart';

export const chartFooter = [
  { day: '15', color: '#21AB70', label: 'Present' },
  { day: '01', color: '#C94040', label: 'Absent' },
  { day: '02', color: '#F1C34D', label: 'Half day' },
  { day: '02', color: '#102C75', label: 'Late' },
  { day: '02', color: '#4474ED', label: 'WFH' },
  { day: '0', color: '#181818', label: 'Short time' },
];

export const chartData = [
  { browser: 'Present', visitors: 275, fill: '#21AB70' },
  { browser: 'Absent', visitors: 200, fill: '#C94040' },
  { browser: 'Half day', visitors: 187, fill: '#F1C34D' },
  { browser: 'Late', visitors: 173, fill: '#102C75' },
  { browser: 'WFH', visitors: 90, fill: '#4474ED' },
  { browser: 'Short time', visitors: 50, fill: '#181818' },
];

export const chartConfig = {
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
