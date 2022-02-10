import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Interceptors from './utils/interceptors';

Interceptors.ResponseInterceptor();

ReactDOM.render(
    <App />,
  document.getElementById('root')
);