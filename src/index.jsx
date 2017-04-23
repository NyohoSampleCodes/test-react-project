import React from 'react';
import ReactDOM from 'react-dom';
import Something from './components/something.jsx';
import TeX from './components/tex.jsx';

ReactDOM.render(
  <div>
    <Something />
    <TeX />
  </div>,
  document.getElementById('root')
);
