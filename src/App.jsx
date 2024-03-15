import { useState } from 'react'
import _ from 'underscore';
import { useResizeDetector } from 'react-resize-detector';
import { expand, nDistinct, calcPadding } from './utils';

import ChartStage from './components/ChartStage/ChartStage';
import TextPanel from './components/TextPanel/TextPanel';
import Container from './components/Layout/Container/Container';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Pager from './components/Pager/Pager';

import './App.scss';

import fullData from './data/wages-data.json';
import fullMeta from './data/wages-meta.json';
import fullText from './data/wages-text.json';
import Column from './components/Layout/Column/Column';


function App() {
  const [page, setPage] = useState(1);
  
  const fullPalette = {
    default: '#8e809cee',
    Men: '#506ca5ee',
    Women: '#db6f2bee',
    'Full-time': '#733b8dee',
    'Part-time': '#adafb3ee'
  };
  
  const nPages = _.keys(fullData).length;
  
  let data = fullData[page.toString()];
  let meta = fullMeta[page.toString()];
  let text = fullText[page.toString()];

  let colorKeys = _.uniq(_.pluck(data, 'color'));
  let palette = _.pick(fullPalette, (v, k) => {
    return _.contains(colorKeys, k) || k === 'default';
  });
  
  // for dots, nest to do dumbbells
  // let dumbbell = meta.make_dumbbell ? pivotDumbbell(data) : null;
  let extent = expand(_.pluck(data, 'value'));

  const { width, ref } = useResizeDetector();
  let nX = nDistinct(data);
  let padding = calcPadding(nX, width, meta.direction);

  let size = { x: 500, y: 400 };
  if (width < 600) {
    size.y = 280;
  }

  return (
    <div className='App text-md md:text-lg  mx-auto'>
      <Header text='The many wage gaps in Connecticut' />
      <Container cols='lg:grid-cols-3'>
        <Column size={1} span='col-span-1 lg:col-span-1'>
          <TextPanel text={text.text} />
          <Pager
            total={nPages}
            page={page}
            onChange={setPage}
            size='sm'
            isCompact={true}
            showControls={true}
            boundaries={1}
          />
        </Column>
        <Column size={2} span='col-span-1 lg:col-span-2'>
          <div ref={ref}></div>
          <ChartStage
            size={size}
            data={data}
            meta={meta}
            title={text.chart_title}
            extent={extent}
            padding={padding}
            palette={palette}
            shouldWrap={(width < 600) || (meta.direction === 'horizontal')}
            nChar={meta.direction === 'vertical' ? 12 : 24}
          />
        </Column>
      </Container>
      <Footer 
        universe='All values are for adults ages 25 and older with positive earnings. Full-time is defined as working at least 35 hours per week, 50 weeks per year. '
        source='DataHaven analysis (2024) of data from US Census Bureau American Community Survey 2022 5-year estimates. Accessed via IPUMS USA, University of Minnesota. '
        sourceLink='https://www.ipums.org'
        dataLink='https://raw.githubusercontent.com/CT-Data-Haven/wage-gap-24/main/public/2022_datahaven_wage_gap.csv'
      />
    </div>
  );
}

export default App;
