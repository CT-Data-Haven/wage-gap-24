import React from 'react';
import './Tooltip.scss';
import { AnnotationLabel } from 'react-annotation';

const Tooltip = ({ d, formatter, direction }) => {
  // if point has x and color, write title as 'd.color, d.x
  // otherwise just d.x
  let title = d.color ? `${d.color}, ${d.x}` : d.x;
  let value = formatter(d.value);
  console.log(d);
  return (
    <div className={`Tooltip tooltip-content text-sm leading-snug tooltip-${direction}`}>
      <div className='font-semibold'>{title}</div>
      <div className='text-right'>{value}</div>
    </div>
  );
};

export default Tooltip;
