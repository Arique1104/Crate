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
import StyleSurvey from './StyleSurvey.js';

describe('StyelSurvey', () => {

  it('should render the style survey', () => {
    const { getByText } = render (
      <Provider store={store}>
        <BrowserRouter>
          <StyleSurvey />
        </BrowserRouter>
      </Provider>
    );

    expect(getByText('Pick which styles suit your tastes!')).toBeInTheDocument();
  });

  //should test that style button clickability
  //should test that style summary appears when submit clicked.
})
