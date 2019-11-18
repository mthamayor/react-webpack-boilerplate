import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const wrapper = document.querySelector('#root');

wrapper ? ReactDOM.render(<App />, document.querySelector('#root')) : false;

