// ============== Icons ==============
import DashboardIcon from '@/../public/assets/icons/dashboard.svg';
import AnnouncementsIcon from '@/../public/assets/icons/Announcements.svg';
import LeavesIcon from '@/../public/assets/icons/Leaves.svg';
import StandupIcon from '@/../public/assets/icons/Leaves.svg';
import AttendanceIcon from '@/../public/assets/icons/attendance.svg';

// ============== Colored Icons ==============
import DashboardColoredIcon from '@/../public/assets/icons/dashboard-colored.svg';
import AnnouncementsColoredIcon from '@/../public/assets/icons/announcements-colored.svg';
import LeavesColoredIcon from '@/../public/assets/icons/Leaves-colored.svg';
import StandupColoredIcon from '@/../public/assets/icons/Leaves-colored.svg';
import AttendanceColoredIcon from '@/../public/assets/icons/attendance-colored.svg';

export const tabs = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: DashboardIcon,
    coloredIcon: DashboardColoredIcon,
  },
  {
    name: 'Announcements',
    link: '/dashboard/announcements',
    icon: AnnouncementsIcon,
    coloredIcon: AnnouncementsColoredIcon,
  },
  {
    name: 'Attendance',
    link: '/dashboard/attendance',
    icon: AttendanceIcon,
    coloredIcon: LeavesColoredIcon,
  },
  {
    name: 'Leaves',
    link: '/dashboard/leaves',
    icon: LeavesIcon,
    coloredIcon: StandupColoredIcon,
  },
  {
    name: 'Standup',
    link: '/dashboard/standup',
    icon: StandupIcon,
    coloredIcon: AttendanceColoredIcon,
  },
];
