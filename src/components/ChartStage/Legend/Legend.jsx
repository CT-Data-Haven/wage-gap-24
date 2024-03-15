import React from 'react';
import './Legend.scss';

const LegendKey = ({ color, label }) => (
  <div className='flex items-center mr-6'>
    <span className='w-5 h-4 mr-2' style={{ backgroundColor: color }}></span>
    <span>{label}</span>
  </div>
);

const Legend = ({ palette }) => {
  const keys = Object.keys(palette)
    .filter(k => k !== 'default')
    .map((d) => (
      <LegendKey key={d} color={palette[d]} label={d} />
    ));
  
  // keep fixed height so the chart doesn't jump if there's no keys to draw
  return (
    <div className='Legend flex ml-6 h-6'>{keys}</div>
  );
};

export default Legend;
