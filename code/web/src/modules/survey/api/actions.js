import axios from 'axios'
import { query, mutation } from 'gql-query-builder'
import { routeApi } from '../../../setup/routes'








// axios.post == fetch with post as body
    // graphql has only 1 endpoint
      // (instead of multiple in express.js server)
      // query == GET || mutation == POST
        // operation -> refering to crates in API
        // variables -> what you're ordering list by
          //what you're giving to the API
        // fields -> what you're getting back for each crate


// export const SURVEY_GET_STYLES_REQUEST = 'SURVEY/GET_STYLES_REQUEST'
// export const SURVEY_GET_STYLES_RESPONSE = 'SURVEY/GET_STYLES_RESPONSE'
// export const SURVEY_GET_STYLES_FAILURE = 'SURVEY/GET_STYLES_FAILURE'
//
// // actions
//
// // Get list of styleSurvey
// export function getStyles(orderBy = 'DESC', isLoading = true) {
//   return dispatch => {
//     dispatch({
//       type: SURVEY_GET_STYLES_REQUEST,
//       error: null,
//       isLoading
//     })
//
//     return axios.post(routeApi, query({
//       //endpoint from backend
//     }))
//       .then(response => {
//         if (response.status === 200) {
//           dispatch({
//             type: SURVEY_GET_STYLES_RESPONSE,
//             error: null,
//             isLoading: false,
//             list: []//response.data from backend
//           })
//         } else {
//           console.error(response)
//         }
//       })
//       .catch(error => {
//         dispatch({
//           type: SURVEY_GET_STYLES_FAILURE,
//           error: 'Some error occurred. Please try again.',
//           isLoading: false
//         })
//       })
//   }
// }
