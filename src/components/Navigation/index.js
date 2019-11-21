import React from 'react';
import { AlignLeft, Facebook, Twitter } from 'react-feather';

const Navigation = () => {
  return (
    <nav>
      <div className='flex items-center h-16'>
        <div class='flex flex-1 items-center font-weight-bold text-center px-4 py-2 m-2'>
          <img
            src='../../../../public/assets/img/edata.svg'
            style={{ width: 50, height: 50 }}
          />
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navigation;
