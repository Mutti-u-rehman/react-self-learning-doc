
import React from 'react';
import ReactDOM from 'react-dom/client';

const child = React.createElement('p', {  }, 'Hello React!');
const heading = React.createElement('div', { id: 'title', abc: "xyz" }, child);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);