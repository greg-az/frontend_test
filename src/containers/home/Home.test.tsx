import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../store'
import { Provider } from 'react-redux'

import Home from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

