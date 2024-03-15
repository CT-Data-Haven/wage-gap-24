import React from 'react';
import './Container.scss';

const Container = ({ cols, children }) => {
  // const sizeStr = `md:grid-cols-${cols}`;
  return (
    <div className={'Container grid grid-cols-1 gap-6 mt-8 mb-6' + ' ' + cols}>{children}</div>
  );
};

export default Container;
