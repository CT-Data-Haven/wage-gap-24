import React from 'react';
import Chart  from './Chart/Chart';
import Legend from './Legend/Legend';
// import Tooltip from './Tooltip/Tooltip';
import Label from './Label/Label';
import { format } from 'd3-format';
import { textwrap } from 'd3-textwrap';

import './ChartStage.scss';

const ChartStage = ({ size, data, meta, title, extent, padding, palette }) => {
  const color = (d) => palette[d.color] || palette.default;

  const dotSize = 10;

  let margins = { top: 10, right: 25, bottom: 36 };
  margins.left = meta.left;

  const orients = {
    vertical: 'left',
    horizontal: 'bottom'
  };

  const formats = {
    axis: {
      income: '$~s',
      share: '.0%'
    },
    tooltip: {
      income: '$.2s',
      share: '.0%'
    }
  };

  const chartProps = {
    size: [size.x, size.y],
    color: color,
    oAccessor: 'x',
    rAccessor: 'value',
    oPadding: padding,
    oLabel: true,
    // oLabel: (d) => textwrap().bounds({ height: 30, width: 100 })(d),
    responsiveWidth: true,
    responsiveHeight: false,
  };

  const axisFormatter = format(formats['axis'][meta.val_type]);
  const tipFormatter = format(formats['tooltip'][meta.val_type]);

  // const tooltip = (d) => <Tooltip d={d} formatter={tipFormatter} direction={meta.direction} />;

  const chart_type = meta.chart_type === 'point' ? { type: 'point', r: dotSize } : meta.chart_type;

  let rExtent;
  if (meta.chart_type === 'point') {
    rExtent = extent;
  }

  const annotations = data.map((d, i) => {
    d.type = 'direct-label';
    d.label = tipFormatter(d.value);
    d.xoff = d.xoff || 0;
    return d;
  });

  const ticks = 5;
  let axes = {
    orient: orients[meta.direction] || orients.vertical,
    ticks: ticks
  };
  if (meta.chart_type === 'point') {
    axes.tickFormat = (d) => axisFormatter(d) || d;
  } else {
    axes.tickFormat = () => '';
  }

  return (
    <div className='ChartStage'>
      <h3 className='text-xl font-semibold h-12 mt-4'>{title}</h3>
      <Legend palette={palette} />
      <Chart
        {...chartProps}
        data={data}
        projection={meta.direction}
        type={chart_type}
        margin={margins}
        axes={axes}
        rExtent={rExtent}
        annotations={annotations}
        // pieceHoverAnnotation={true}
        // tooltipContent={tooltip}
        svgAnnotationRules={
          meta.use_labels ? (d) => (
          <Label
            key={`label-${d.i}`}
            {...d}
            chart_type={meta.chart_type}
            margins={margins}
            size={size} />
        ) : null
        }
      />
    </div>
  );
};

export default ChartStage;