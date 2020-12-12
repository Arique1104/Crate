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
import List from './List.js';

describe('List', () => {

  it('should render the List component', () =>{

    const { getByText } = render (
      <Provider store={store}>
        <BrowserRouter>
          <List />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText('Crates for everyone!')).toBeInTheDocument();
  })
})
