// React
import React from 'react';

// Assets
import DashboardIcon from '@/../public/assets/icons/dashboard.svg';
import LogoutIcon from '@/../public/assets/icons/logout.svg';

// Utilities
import { cn } from '@/lib/utils';

// Components
import Tab from './tab';

const Sidebar = () => {
  return (
    <div
      className={cn(
        'p-4 hover:p-6',
        'h-full',
        'custom-transition',
        'bg-card-black text-transparent hover:text-current',
      )}
    >
      <div
        className={cn(
          'flex flex-col justify-between',
          'h-full',
          'hover:min-w-[200px]',
        )}
      >
        {/* Dashboard */}
        <Tab
          icon={DashboardIcon}
          name='Dashboard'
          link='/'
        />

        {/* Logout */}
        <Tab
          icon={LogoutIcon}
          name='Logout'
          link='/login'
        />
      </div>
    </div>
  );
};

export default Sidebar;
