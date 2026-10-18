
const child = React.createElement('p', {  }, 'React!');
const heading = React.createElement('div', { id: 'title', abc: "xyz" }, ["Hello, ", child, "How are you?"]);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);