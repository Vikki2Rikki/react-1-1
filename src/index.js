import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Card } from './components/Card';

// const paragraph = React.createElement('p', {
//   id: 'test-id',
//   children: ['I am a P'],
// });
//const root = document.getElementById('root');

//const p = <p id="test-p-id">I am a p</p>;
// const div = React.createElement('div', {
//   name: 'main',
//   id: 'test-id',
//   className: 'test-wrap',
//   children: p,
// });

// const div = (
//   <div name="main" id="id" className="class-main">
//     {p}
//   </div>
// );

//ReactDOM.createRoot(document.getElementById('root')).render(div);

//console.log('div =>', div);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);

//console.log('card ==>>', Card);
ReactDOM.createRoot(document.getElementById('root')).render(<Card />);
