import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const wrapper = document.querySelector('#root');

wrapper ? ReactDOM.render(<App />, document.querySelector('#root')) : false;

