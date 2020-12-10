import { crates, crate } from './state.js';

describe('crates', () => {
  const cratesInitialState = {
    isLoading: false,
    error: null,
    list: []
  };

  it('should return the initial state if no action', () => {
    const result = crates(cratesInitialState, {});

    expect(result).toEqual(cratesInitialState)
  });

  //test if no action
  //
})
