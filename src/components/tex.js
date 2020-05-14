import React from 'react';
import ReactDOM from 'react-dom';
import { renderToString } from 'react-dom/server';
import { mathjax } from 'mathjax-full/js/mathjax';
import { TeX } from 'mathjax-full/js/input/tex';
import { AllPackages } from 'mathjax-full/js/input/tex/AllPackages';
import { SVG } from 'mathjax-full/js/output/svg';
import { browserAdaptor } from 'mathjax-full/js/adaptors/browserAdaptor';
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html';

const texString = `\\zeta(s) := \\sum_{n=1}^\\infty n^{-s}`;

const adaptor = browserAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({packages: [...AllPackages]});
const svg = new SVG({fontCache: 'none'});
const mathjaxDocument = mathjax.document('', {
  InputJax: tex,
  OutputJax: svg,
});

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

//const string = renderToString(<MathJax.Provider><MathJax.Node formula={texString} /></MathJax.Provider>);

class TeXComponent extends React.Component {
  constructor() {
	super();
  }

  componentDidMount() {
  }

  render() {
    const display = false;
    const math = texString;
    const html = mathjaxDocument.convert(math, {display}).outerHTML;

    return (
      <div>
        <div>Component from string:
          <span dangerouslySetInnerHTML={{__html: html}}></span>
        </div>
      </div>
    );
  }
}

export default TeXComponent
