import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import { routeApi } from '../../../setup/routes'

export function setPrimaryStyle(surveyDetails) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'userUpdate',
      variables: surveyDetails,
      fields: ['id', 'primaryStyle']
    }))
  }
}

export function setSecondaryStyle(surveyDetails) {
  return dispatch => {
    return axios.post(routeApi, mutation({
      operation: 'userUpdate',
      variables: surveyDetails,
      fields: ['id', 'secondaryStyle']
    }))
  }
}
