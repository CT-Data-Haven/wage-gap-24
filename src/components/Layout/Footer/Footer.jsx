import React from 'react';
import { Link } from '@nextui-org/react';
import './Footer.scss';

const Footer = ({ universe, source, sourceLink, dataLink }) => {
  return (
    <div className='Footer text-base'>
      <footer>
        <p>
          <span className='font-semibold'>Source: </span>
          {source}
          <Link isExternal href={sourceLink} underline='hover' className='ml-1'>
            {sourceLink}
          </Link>
        </p>
        <p>
          <span className='font-semibold'>Note: </span> {universe}
        </p>
        <p>
          <span className='font-semibold'>Download data: </span> 
          <Link isExternal href={dataLink} underline='hover' className='ml-1'>
            {dataLink}
          </Link>
        </p>
      </footer>
    </div>
  )
};

export default Footer;
