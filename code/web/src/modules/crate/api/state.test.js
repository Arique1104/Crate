import { crates, crate } from './state.js';

describe('crates reducer', () => {
  const cratesInitialState = {
    isLoading: false,
    error: null,
    list: []
  };

  it('should return the initial state if no action', () => {
    const result = crates(cratesInitialState, {});

    expect(result).toEqual(cratesInitialState)
  });

  it('should change isLoading to true', () => {
    // const action = 
  })
})
