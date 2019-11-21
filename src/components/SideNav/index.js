import React from 'react';
import { Archive, HelpCircle, Mail, ShoppingBag } from 'react-feather';

const SideNav = () => {
  return (
    <nav className='h-full flex items-center shadow'>
      <div className='h-auto'>
        <div className='px-1 py-1 ml-2 mr-2 mb-12 text-center w-14'>
          <ShoppingBag className='m-auto' />
          <small>Data</small>
        </div>
        <div className='px-1 py-1 ml-2 mr-2 mb-12 text-center w-14'>
          <Archive className='m-auto' />
          <small>History</small>
        </div>
        <div className='px-1 py-1 ml-2 mr-2 mb-12 text-center w-14'>
          <Mail className='m-auto' />
          <small>Contact</small>
        </div>
        <div className='px-1 py-1 ml-2 mr-2 text-center w-14'>
          <HelpCircle className='m-auto' />
          <small>Help</small>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
