import React from 'react';
import './Column.scss';

const Column = ({size, span, children}) => {
  // assign col-span-* class based on size prop
  // const sizeStr = `col-span-${size}`;
  return (
    <div className={'Column grid' + ' ' + span}>{children}</div>
  );
};

export default Column;
