import React from 'react'
import { OrdinalFrame, ResponsiveOrdinalFrame } from 'semiotic';

import './Chart.scss';

// animated transitions don't seem to work in semiotic v2
const Chart = (props) => {
  return (
    <div className='Chart font-narrow '>
      <ResponsiveOrdinalFrame
        {...props}
        style={ d => ({ 
          fill: props.color(d),
          stroke: 'white',
          strokeWidth: 1,
          opacity: 0.95
        }) }
        renderKey={(d, i) => d.key || i}
      />
    </div>
  );
};

export default Chart;