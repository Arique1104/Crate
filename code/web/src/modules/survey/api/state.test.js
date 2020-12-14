import { SURVEY_GET_STYLES_REQUEST, SURVEY_GET_STYLES_RESPONSE, SURVEY_GET_STYLES_FAILURE } from './actions.js';
import { survey } from './state.js';

describe('survey reducer', () => {
  let surveyInitialState;
  beforeEach(() => {
    surveyInitialState = {
      isLoading: false,
      error: null,
      list: []
    }
  });

  it('should return initial state as default', () => {
    const result = survey(surveyInitialState, {});

    expect(result).toEqual(surveyInitialState)
  });

  it('should initiate page load with request action', () => {
    const goodAction  = {
      type: SURVEY_GET_STYLES_REQUEST,
      error: null,
      isLoading: true
    }
    const result = survey(surveyInitialState, goodAction);

    expect(result.isLoading).toEqual(true);
  });

  it('should return a response with response action', () => {
    const goodAction  = {
      type: SURVEY_GET_STYLES_RESPONSE,
      error: null,
      isLoading: false,
      list: [{ id: 1 }, { id: 2 }]
    }
    const result = survey(surveyInitialState, goodAction);

    expect(result.list).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should return an error message with error action', () => {
    const goodAction  = {
      type: SURVEY_GET_STYLES_FAILURE,
      error: 'there is an error',
      isLoading: false
    }
    const result = survey(surveyInitialState, goodAction);

    expect(result.error).toEqual('there is an error');
  })
})
