
import {
  SURVEY_GET_STYLES_REQUEST,
  SURVEY_GET_STYLES_RESPONSE,
  SURVEY_GET_STYLES_FAILURE
} from './actions'


//We ended up not needing these
const surveyInitialState = {
  isLoading: false,
  error: null,
  list: []
}

export const survey = (state = surveyInitialState, action) => {
  switch (action.type) {
    case SURVEY_GET_STYLES_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case SURVEY_GET_STYLES_RESPONSE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
          list: action.list
        }

    case SURVEY_GET_STYLES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error
        }

    default:
      return state
  }
}
