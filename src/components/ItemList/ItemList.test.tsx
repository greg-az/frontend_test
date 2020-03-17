import React from 'react';
import ReactDOM from 'react-dom';
import store from '../../store'
import { Provider } from 'react-redux'

import ItemList from './index';
import { Iproducts } from '../../containers/home';

const item: Iproducts[] = [
    {
        id: 'item-id-chisel',
        thumbnail: 'doesntmatter',
        name: 'Chisel',
        unitPrice: 13.9,
    },
    {
        id: 'item-id-chisel2',
        thumbnail: 'doesntmatter',
        name: 'Chisel',
        unitPrice: 13.9,
    }
];

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(  
    <Provider store={store}>
        <div>
        <ItemList items={item} />
        </div>
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

