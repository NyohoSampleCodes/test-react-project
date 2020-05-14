import React from 'react';
import ReactDOM from 'react-dom';
import Something from './components/something';
import TeXComponent from './components/tex';

ReactDOM.render(
  <div>
    <Something />
    <TeXComponent />
  </div>,
  document.getElementById('root')
);
