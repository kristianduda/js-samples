import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';
import './index.scss';

ReactDOM.render(
  <HelloMessage message="Hello, world!" />,
  document.getElementById('root')
);