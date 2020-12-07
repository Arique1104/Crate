// App Imports
import List from '../../modules/crate/List'

// Crate routes
  //this is where the whole thing should start! at this route is where all
  //the crate sub options live and when one is selected it'll take ya to a style survey
export default {
  list: {
    path: '/crates',
    component: List,
    auth: true
  }
}
