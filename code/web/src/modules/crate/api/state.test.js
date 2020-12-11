import { CRATES_GET_LIST_REQUEST } from './actions.js';
import { crates, crate } from './state.js';

describe('crates reducer', () => {
  const cratesInitialState = {
    isLoading: false,
    error: null,
    list: []
  };

  it('should return the initial state as a default', () => {
    const result = crates(cratesInitialState, {});

    expect(result).toEqual(cratesInitialState)
  });

  it('should change isLoading to true', () => {
    const getListRequestAction = {
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading = true
    }

    const result = crates()
  })
})
