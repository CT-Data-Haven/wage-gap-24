import { min, max } from 'd3-array';
import _ from 'underscore';

// similar to ggplot expansion, add padding to rExtend based on ratio
const expand = (x, ratio = 0.05) => {
  let minVal = min(x);
  let maxVal = max(x);
  let width = maxVal - minVal;
  let pad = width * ratio;
  return [minVal - pad, maxVal + pad];
};

// pivot from { x, color, value } to {x, color1, color2 }
const pivotDumbbell = (x) => {
  let dumbbell = _.groupBy(x, 'x');
  dumbbell = _.mapObject(dumbbell, (d, i) => {
    let vals = _.object(_.pluck(d, 'color'), _.pluck(d, 'value'));
    return _.extend({ x: i }, vals);
  });
  dumbbell = _.toArray(dumbbell);
  return dumbbell;
};

// number of distinct values at given key
const nDistinct = (x, key = 'x') => {
  return _.uniq(_.pluck(x, key)).length;
};

// determine padding between bars
const calcPadding = (n, width, direction) => {
  let padding;
  
  if (direction === 'horizontal') {
    padding = 60;
  } else if (n > 2 ) {
    if (width > 800) {
      padding = 60;
    } else if (width > 400) {
      padding = 30;
    } else {
      padding = 20;
    }
  } else {
    if (width > 800) {
      padding = 200;
    } else if (width > 600) {
      padding = 100;
    } else {
      padding = 50;
    }
  }
  return padding;
}

export { expand, pivotDumbbell, nDistinct, calcPadding };