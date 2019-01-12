import React from 'react';
import ReactDOM from 'react-dom';
import MathJax  from 'react-mathjax';

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

const string = componentToString(<MathJax.Provider><MathJax.Node formula={texString} /></MathJax.Provider>);

class TeX extends React.Component {
  render() {
    return (
      <div>
        <div>Direct component:</div>
        <MathJax.Provider>
          <MathJax.Node formula={texString} />
        </MathJax.Provider>
        <div>Component from string:</div>
        <div dangerouslySetInnerHTML={{__html: string}} />
      </div>
    );
  }
}

export default TeX
