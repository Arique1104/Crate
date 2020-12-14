import React, { PureComponent } from 'react';
import { Provider,} from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { store }from '../../setup/store.js';
import configureStore from 'redux-mock-store';
import Item from './Item.js';

describe('Item', () => {

  it('should render a subscription item displaying a name and description', () => {
    const dumCrate = {
      id: 1,
      name: 'human clothes',
      description: 'these are clothes for humans'
    }

    const { getByText } = render (
      <Provider store={store}>
        <BrowserRouter>
          <Item crate={dumCrate}/>
        </BrowserRouter>
      </Provider>
    );

    expect(getByText('human clothes')).toBeInTheDocument();
  });
  
})
