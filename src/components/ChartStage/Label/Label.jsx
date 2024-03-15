import React from 'react';
import './Label.scss';

const Label = ({ d, rScale, orFrameState, chart_type, margins, size }) => {
  const nCluster = chart_type === 'clusterbar' ? orFrameState.projectedColumns[d.x].pieces.length : 1;
  const barWidth = orFrameState.projectedColumns[d.x].width / nCluster;
  const xStart = orFrameState.projectedColumns[d.x].x;
  const x = xStart + (barWidth) * d.xoff + (barWidth / 2);

  // use d.cumul if available; else use d.value
  const value = d.cumul || d.value;
  const y = size.y - rScale(value) - margins.top - margins.bottom;

  let fontSize;
  if (barWidth > 100) {
    fontSize = 'text-xl';
  } else if (barWidth > 60) {
    fontSize = 'text-lg';
  } else {
    fontSize = 'text-base';
  }

  return (
    
    <g className='Label direct-label' width={barWidth} key={`${d.key}-label`}>
      <text x={x} y={y} className={'font-bold' + ' ' + fontSize}>{d.label}</text>
    </g>
  );
};

export default Label;
