import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import { routeApi } from '../../../setup/routes'


//post user styles mutation
export function addPrimaryStyle(surveyDetails) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      opertion: 'userUpdate',
      variables: surveyDetails,
      fields: [2, 'primaryStyle']
    }))
  }
}

export function addSecondaryStyle(surveyDetails) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'userUpdate',
      variables: surveyDetails,
      fields: [2, 'secondaryStyle']
    }))
  }
}


export const SURVEY_GET_STYLES_REQUEST = 'SURVEY/GET_STYLES_REQUEST'
export const SURVEY_GET_STYLES_RESPONSE = 'SURVEY/GET_STYLES_RESPONSE'
export const SURVEY_GET_STYLES_FAILURE = 'SURVEY/GET_STYLES_FAILURE'

// actions
 // we don't actually use these, but for the purposes of having reducers to test they are included

// Get list of styleSurvey
export function getStyles(orderBy = 'DESC', isLoading = true) {
  return dispatch => {
    dispatch({
      type: SURVEY_GET_STYLES_REQUEST,
      error: null,
      isLoading
    })

    return axios.post(routeApi, query({
      operation: '',
      variables: {},
      fields: []
    }))
      .then(response => {
        if (response.status === 200) {
          dispatch({
            type: SURVEY_GET_STYLES_RESPONSE,
            error: null,
            isLoading: false,
            list: []
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
