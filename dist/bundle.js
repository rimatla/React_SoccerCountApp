'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

//styles

var styleApp = {
    backgroundColor: '#222222',
    color: '#00d8ff',
    fontFamily: 'verdana',
    width: '400px',
    borderRadius: '2px',
    textAlign: 'center',
    margin: '0 auto'
};

render(
//name of element to render
React.createElement(
    'h1',
    { id: 'tittle', className: 'header', style: styleApp },
    'Hello World'
),
//where to render it in the DOM
document.getElementById('react-container'));
