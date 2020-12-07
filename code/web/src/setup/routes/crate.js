// App Imports
import List from '../../modules/crate/List'

// Crate routes
// the subscription button will route to the Style Survey component if the user does not already have a style survey.
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
}
