// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/index';

// import '../css/app.css'; 

// ReactDOM.render(<App />, document.getElementById('react-app'));


import { createRoot } from 'react-dom/client';
import App from './components/index';

import '../css/app.css'; 

const container = document.getElementById('react-app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(<App tab="home" />);

