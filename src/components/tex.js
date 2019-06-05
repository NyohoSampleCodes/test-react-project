import React from 'react';
import ReactDOM from 'react-dom';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { renderToString } from 'react-dom/server';

const texString = `\\zeta(s) := \\sum_{n=1}^\\infty n^{-s}`;

const componentToString = c => {
  let aDom = document.createElement('span');
  var finished = false;
  ReactDOM.render(c, aDom, () => {
    finished = true;
  });
  while(finished == false) { }
  const s = aDom.outerHTML;
  console.log(aDom,s);
  return s;
};

const string = renderToString(<div><BlockMath math={texString} /><InlineMath math={texString} /></div>);

class TeX extends React.Component {
  render() {
    return (
      <div>
        <div>Direct component:</div>
        <div><BlockMath math={texString} /><InlineMath math={texString} /></div>
        <div>Component from string:</div>
        <div dangerouslySetInnerHTML={{__html: string}} />
      </div>
    );
  }
}

export default TeX
