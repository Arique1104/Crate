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
  })

  it('should return the initial state as a default', () => {
    const result = crates(cratesInitialState, {});

    expect(result).toEqual(cratesInitialState)
  });

  it('should change isLoading to true when CRATES_GET_LIST_REQUEST action is passed', () => {
    const getListRequestAction = {
      type: CRATES_GET_LIST_REQUEST,
      error: null,
      isLoading: true
    }

    const result = crates(cratesInitialState, getListRequestAction)

    expect(result).toEqual({...cratesInitialState, isLoading: true})
  })

  it('should add crates to a list on successful API call', () => {
    const getListResponseAction = {
      type: CRATES_GET_LIST_RESPONSE,
      error: null,
      isLoading: false,
      list: action.list
    }

    const result = crates(cratesInitialState, getListResponseAction)

    expect(result).toEqual({})
  })
})
