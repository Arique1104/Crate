import axios from 'axios'
mport { query, mutation } from 'gql-query-builder'

import { routeApi } from '../../../setup/routes'

export const SURVEY_GET_STYLES_REQUEST = 'SURVEY/GET_STYLES_REQUEST'
export const SURVEY_GET_STYLES_RESPONSE = 'SURVEY/GET_STYLES_RESPONSE'
export const SURVEY_GET_STYLES_FAILURE = 'SURVEY/GET_STYLES_FAILURE'

// actions

// Get list of styleSurvey
export function getStyles(orderBy = 'DESC', isLoading = true) {
  return dispatch => {
    dispatch({
      type: SURVEY_GET_STYLES_REQUEST,
      error: null,
      isLoading
    })

    return axios.post(routeApi, query({
      //endpoint from backend
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: SURVEY_GET_STYLES_RESPONSE,
            error: null,
            isLoading: false,
            list: []//response.data from backend
          })
        } else {
          console.error(response)
        }
      })
      .catch(error => {
        dispatch({
          type: SURVEY_GET_STYLES_FAILURE,
          error: 'Some error occurred. Please try again.',
          isLoading: false
        })
      })
  }
}
