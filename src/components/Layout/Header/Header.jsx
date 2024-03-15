import React from 'react';
import './Header.scss';

const Header = ({text}) => {
  return (
    <div className='Header'>
      <header>
        <h1 className='text-2xl md:text-4xl font-semibold'>{text}</h1>
      </header>
    </div>
  );
};

export default Header;
