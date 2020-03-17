import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../store'
import { Provider } from 'react-redux'

import App from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  
  ReactDOM.render(  
    <Provider store={store}>
      <div>
        <App/>
      </div>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

