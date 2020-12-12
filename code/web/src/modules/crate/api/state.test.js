import { CRATES_GET_LIST_REQUEST } from './actions.js';
import { crates, crate } from './state.js';

describe('crates reducer', () => {
  let cratesInitialState;
  beforeEach(() => {
    cratesInitialState = {
      isLoading: false,
      error: null,
      list: []
    };
  });

  it('should return the initial state as a default', () => {
    const result = crates(cratesInitialState, {});

    expect(result).toEqual(cratesInitialState)
  });

  it('should change isLoading to true when CRATES_GET_LIST_REQUEST action is passed', () => {
    const mockGetListRequestAction = {
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading: true
    }

    const result = crates(cratesInitialState, mockGetListRequestAction)

    expect(result).toEqual({...cratesInitialState, isLoading: true})
  });

  it('should add crates to a list on successful API call', () => {

    const mockGetListResponseAction = {
      type: 'CRATES/GET_LIST_RESPONSE',
      error: null,
      isLoading: false,
      list: ['mockCrate']
    }

    const result = crates(cratesInitialState, mockGetListResponseAction)

    expect(result).toEqual({...cratesInitialState, list: ['mockCrate']})
  });

  it('should return an error message on unsuccessful API call', () => {
    const mockGetListFailureAction = {
      type: 'CRATES/GET_LIST_FAILURE',
      error: 'Some error ocurred. Please try again.',
      isLoading: false
    }

    const result = crates(cratesInitialState, mockGetListFailureAction)

    expect(result).toEqual({isLoading: false, error: 'Some error ocurred. Please try again.', list: []})
  });
});

describe.only('single crate reducer', () => {
  let mockCrateInitialState;
  beforeEach(() => {
    mockCrateInitialState = {
      isLoading: false,
      error: null,
      item: {}
    };
  });

  it('should return the initial state as a default', () => {
    
 
  });

  it('should change isLoading to true when action with type CRATES/GET_REQUEST is passed', () => {
    const mockCratesGetRequest = {
      type: 'CRATES/GET_REQUEST',
      isLoading: true
    };
    
    const result = crate(mockCrateInitialState, mockCratesGetRequest);

    expect(result).toEqual({...mockCrateInitialState, isLoading: true});
  })
});