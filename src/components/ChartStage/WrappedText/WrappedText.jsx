import React from 'react';
import wordwrap from 'wordwrapjs';

import './WrappedText.scss';

const WrappedText = ({ text, nChar, shouldWrap, direction }) => {
  if (shouldWrap) {
    const lines = wordwrap.lines(text, { width: nChar });
    const anchor = direction === 'horizontal' ? 'end' : 'middle';
    return (
      <text className='wrapped' style={{ textAnchor: anchor}}>
        {lines.map((l, i) => <tspan key={`tspan-${l}`} x={0} dy={i === 0 ? 0 : '0.9rem'}>{l}</tspan>)}
      </text>
    );
  } else {
    return text;
  }

};

export default WrappedText;
