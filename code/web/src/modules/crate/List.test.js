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

// const mockStore = configureStore([]);

describe('List', () => {

  it('should render the List component', () =>{
    // const rootReducer = jest.fn();
    // const store = createStore(Reducer);
    // ({
    //   isLoading: false,
    //   error: null,
    //   list: []
    // })
    const { getByText } = render (
      <Provider store={store}>
        <BrowserRouter>
          <List />
        </BrowserRouter>
      </Provider>
    );
    // screen.debug();
    expect(getByText('Crates for everyone!')).toBeInTheDocument();
  })
})
