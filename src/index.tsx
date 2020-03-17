import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
import App from './containers/app'

const target = document.querySelector('#root')

render(<App/>,target)

serviceWorker.unregister();
