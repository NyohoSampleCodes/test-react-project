import React from 'react';
import ReactDOM from 'react-dom';
const MathJax = require('react-mathjax');

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

const string = componentToString(<MathJax.Context><MathJax.Node>{texString}</MathJax.Node></MathJax.Context>);

export default class TeX extends React.Component {
  render() {
    return (
      <div>
        <div>Direct component:</div>
        <MathJax.Context>
          <MathJax.Node>
            {texString}
          </MathJax.Node>
        </MathJax.Context>
        <div>Component from string:</div>
        <div dangerouslySetInnerHTML={{__html: string}} />
      </div>
    );
  }
}
