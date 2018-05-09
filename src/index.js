import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/reset.css';

import './config';
import Routes from './routes'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Routes />
    , document.getElementById('root')
);
registerServiceWorker();
