import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../store'
import { Provider } from 'react-redux'

import Item from './index';
const item = {
    name : 'test',
    thumbnail : 'test',
    unitPrice : 1.1
}

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(  
    <Provider store={store}>
        <div>
        <Item item={item} />
        </div>
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

