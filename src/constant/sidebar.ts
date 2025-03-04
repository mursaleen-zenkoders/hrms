// ============== Icons ==============
import DashboardIcon from '@/../public/assets/icons/dashboard.svg';
import BellsIcon from '@/../public/assets/icons/bell.svg';
import StandupIcon from '@/../public/assets/icons/Leaves.svg';
import AttendanceIcon from '@/../public/assets/icons/attendance.svg';
import ProfileIcon from '@/../public/assets/icons/profile.svg';

// ============== Colored Icons ==============
import DashboardColoredIcon from '@/../public/assets/icons/dashboard-colored.svg';
import BellColoredIcon from '@/../public/assets/icons/bell-colored.svg';
import StandupColoredIcon from '@/../public/assets/icons/Leaves-colored.svg';
import AttendanceColoredIcon from '@/../public/assets/icons/attendance-colored.svg';
import ProfileColoredIcon from '@/../public/assets/icons/profile-colored.svg';

export const tabs = [
  {
    name: 'Dashboard',
    link: '/dashboard/home',
    icon: DashboardIcon,
    coloredIcon: DashboardColoredIcon,
  },
  {
    name: 'Announcements',
    link: '/dashboard/announcements',
    icon: BellsIcon,
    coloredIcon: BellColoredIcon,
  },
  {
    name: 'Attendance',
    link: '/dashboard/attendance',
    icon: AttendanceIcon,
    coloredIcon: AttendanceColoredIcon,
  },
  // {
  //   name: 'Leaves',
  //   link: '/dashboard/leaves',
  //   icon: LeavesIcon,
  //   coloredIcon: LeavesColoredIcon,
  // },
  {
    name: 'Standup',
    link: '/dashboard/standup',
    icon: StandupIcon,
    coloredIcon: StandupColoredIcon,
  },
  {
    name: 'Profile',
    link: '/dashboard/profile',
    icon: ProfileColoredIcon,
    coloredIcon: ProfileIcon,
  },
];
