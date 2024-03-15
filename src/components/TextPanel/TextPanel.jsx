import React from 'react';
import Markdown from 'react-markdown';

import './TextPanel.scss';

const TextPanel = ({ text }) => {
  // console.log('text', text);
  return (
    <div className='TextPanel prose min-h-56'>
      <Markdown>{text}</Markdown>
    </div>
  );
};

export default TextPanel;