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

  it('should return a state object using CRATES_GET_LIST_REQUEST properties', () => {
    const mockGetListRequestAction = {
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading: true
    }

    const result = crates(cratesInitialState, mockGetListRequestAction)

    expect(result).toEqual({...cratesInitialState, isLoading: true})
  });

  it('should return state object update with list of crates', () => {

    const mockGetListResponseAction = {
      type: 'CRATES/GET_LIST_RESPONSE',
      error: null,
      isLoading: false,
      list: ['mockCrate']
    }

    const result = crates(cratesInitialState, mockGetListResponseAction)

    expect(result).toEqual({...cratesInitialState, list: ['mockCrate']})
  });

  it('should return an object using properties of CRATES/GET_LIST_FAILURE action', () => {
    const mockGetListFailureAction = {
      type: 'CRATES/GET_LIST_FAILURE',
      error: 'Some error ocurred. Please try again.',
      isLoading: false
    }

    const result = crates(cratesInitialState, mockGetListFailureAction)

    expect(result).toEqual({isLoading: false, error: 'Some error ocurred. Please try again.', list: []})
  });
});

describe('single crate reducer', () => {
  let mockCrateInitialState;
  beforeEach(() => {
    mockCrateInitialState = {
      isLoading: false,
      error: null,
      item: {}
    };
  });

  it('should return the initial state as a default', () => {
    const result = crate(mockCrateInitialState, {});

    expect(result).toEqual(mockCrateInitialState);
 
  });

  it('should return a state object with isLoading as true when action with type CRATES/GET_REQUEST is passed', () => {
    const mockCratesGetRequest = {
      type: 'CRATES/GET_REQUEST',
      isLoading: true
    };
    
    const result = crate(mockCrateInitialState, mockCratesGetRequest);

    expect(result).toEqual({...mockCrateInitialState, isLoading: true});
  })

  it('should use properties of CRATES/GET_RESPONSE action to update state object', () => {
    const mockCratesGetResponse = {
      type: 'CRATES/GET_RESPONSE',
      error: null,
      isLoading: false,
      item: {'mockItem': 'mockItemValue'}
    }

    const result = crate(mockCrateInitialState, mockCratesGetResponse)

    expect(result).toEqual({...mockCrateInitialState, item:{'mockItem': 'mockItemValue'}})
  });

  it('should use properties of CRATES/GET_FAILURE action to update state object', () => {
    const mockCratesGetFailure = {
      type: 'CRATES/GET_FAILURE',
      error: 'Some error ocurred. Please try again',
      isLoading: false
    }

    const result = crate(mockCrateInitialState, mockCratesGetFailure)

    expect(result).toEqual({...mockCrateInitialState, error: 'Some error ocurred. Please try again'})
  })
});