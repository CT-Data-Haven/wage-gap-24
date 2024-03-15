import React from 'react';
import { Pagination } from '@nextui-org/react';
import './Pager.scss';

const Pager = (props) => {
  return (
    <div className='Pager self-end mb-6'>
      <Pagination {...props} />
    </div>
  )
};

export default Pager;
