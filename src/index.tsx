import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import App from './containers/app'

const target = document.querySelector('#root')

render(
  <Provider store={store}>
      <div>
        <App/>
      </div>
  </Provider>,
  target
)

serviceWorker.unregister();
