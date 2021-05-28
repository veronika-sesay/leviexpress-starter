import React from 'react';
import { render } from 'react-dom';
import { App } from './components/App';
import './style.css';

export const API_BASE_URL = 'http://leviexpress-backend.herokuapp.com/api';

render(<App />, document.querySelector('#app'));
